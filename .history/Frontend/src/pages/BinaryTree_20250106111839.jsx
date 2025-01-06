import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// API call to fetch MLM data from Django
const containerStyles = {
  width: "100%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};
const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 180,
    height: 40,
    x: 0,
    y: -20,
    color: "#ffffff"
  }
};

const test = {
  shape: "rect",
  shapeProps: {
    width: 0,
    height: 0,
    x: -20,
    y: 20,
    stroke: "#2F80ED"
  }
};

const nodeStyle = (
  <svg viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
    <rect
      width="80"
      height="40"
      x="10"
      y="10"
      style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"
    />
  </svg>
);

const treeStyle = {
  nodes: {
    node: {
      circle: <nodeStyle />,
      name: <nodeStyle />,
      attributes: <nodeStyle />
    }
  }
};

class NodeLabel extends React.PureComponent {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div
        className={className}
        style={{
          background: "#ffffff",
          height: "70px",
          borderTop: "2px solid #2F80ED",
          textAlign: "center",
          // position: "fixed",
          zIndex: "1000",
          // left: "-10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 0",
          borderRadius: "5px"
        }}
      >
        {nodeData.name}
      </div>
    );
  }
}
const MLMTree = () => {
  const [treeData, setTreeData] = useState(null); // Directly set treeData as a single object

  const fetchMLMTree = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_mlm_tree/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Log the fetched data
      return data;
    } catch (error) {
      console.error("Failed to fetch MLM tree:", error);
      return null;
    }
  };

  const cleanTreeData = (data) => {
    // Ensure the data is a single object and not an array of nodes
    if (Array.isArray(data)) {
      data = data[0]; // Assume the root node is wrapped in an array
    }

    // Clean up any null values in the children array
    if (data.children) {
      data.children = data.children.filter((child) => child !== null);

      // Recursively clean children if necessary
      data.children = data.children.map((child) => cleanTreeData(child));
    }
    return data;
  };

  const loadTreeData = async () => {
    const data = await fetchMLMTree();
    if (data) {
      const cleanedData = cleanTreeData(data); // Clean the data
      console.log("Cleaned tree data:", cleanedData);
      setTreeData(cleanedData); // Set the cleaned data directly
    } else {
      console.error("Invalid data format received:", data);
    }
  };

  useEffect(() => {
    loadTreeData();
  }, []);
  return (
    <div style={containerStyles}>
      {treeData ? (
        <Tree
          data={treeData}
          nodeSvgShape={test}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          translate={{ x: 900, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -100
            }
          }}
          initialDepth={0.02}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default MLMTree;

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
class MLMTree extends React.PureComponent {
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
            render: <MLMTree className="myLabelComponentInSvg" />,
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

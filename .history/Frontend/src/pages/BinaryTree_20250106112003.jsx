import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// Styles for the tree container
const containerStyles = {
  width: "100%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

// Node shape for the tree
const nodeShape = {
  shape: "rect",
  shapeProps: {
    width: 180,
    height: 40,
    x: -90,
    y: -20,
    fill: "#ffffff",
    stroke: "#2F80ED",
    rx: 8,
  },
};

// Functional component to render custom node labels
const NodeLabel = ({ nodeData }) => (
  <div
    style={{
      background: "#ffffff",
      height: "70px",
      borderTop: "2px solid #2F80ED",
      textAlign: "center",
      boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      padding: "5px 0",
      borderRadius: "5px",
    }}
  >
    {nodeData.name}
  </div>
);

const MLMTree = () => {
  const [treeData, setTreeData] = useState(null);

  // Fetch MLM tree data from the API
  const fetchMLMTree = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_mlm_tree/");
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch MLM tree:", error);
      return null;
    }
  };

  // Clean the data to remove null children
  const cleanTreeData = (data) => {
    if (Array.isArray(data)) data = data[0]; // Handle array-wrapped root node
    if (data.children) {
      data.children = data.children
        .filter((child) => child !== null)
        .map((child) => cleanTreeData(child));
    }
    return data;
  };

  // Load and clean tree data
  const loadTreeData = async () => {
    const data = await fetchMLMTree();
    if (data) {
      const cleanedData = cleanTreeData(data);
      setTreeData(cleanedData);
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
          nodeSvgShape={nodeShape}
          orientation="vertical"
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          translate={{ x: 900, y: 100 }}
          allowForeignObjects
          nodeLabelComponent={{
            render: <NodeLabel />,
            foreignObjectWrapper: {
              width: 200,
              height: 100,
              y: -50,
              x: -100,
            },
          }}
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

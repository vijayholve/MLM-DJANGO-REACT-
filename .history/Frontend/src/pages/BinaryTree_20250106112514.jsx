import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const containerStyles = {
  width: "100%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

// Responsive Node Shape
const getNodeShape = (width) => ({
  shape: "rect",
  shapeProps: {
    width: width > 768 ? 180 : 120,  // Smaller nodes for mobile
    height: width > 768 ? 50 : 40,
    x: width > 768 ? -90 : -60,
    y: -20,
    fill: "#ffffff",
    stroke: "#2F80ED",
    rx: 8,
  },
});

// Node Label Component
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
      fontSize: "14px",
    }}
  >
    {nodeData.name}
  </div>
);

const MLMTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Fetch Tree Data from API
  const fetchMLMTree = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_mlm_tree/");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch MLM tree:", error);
      return null;
    }
  };

  // Clean Tree Data
  const cleanTreeData = (data) => {
    if (Array.isArray(data)) data = data[0];
    if (data.children) {
      data.children = data.children
        .filter((child) => child !== null)
        .map((child) => cleanTreeData(child));
    }
    return data;
  };

  // Load and Process Tree Data
  const loadTreeData = async () => {
    const data = await fetchMLMTree();
    if (data) {
      const cleanedData = cleanTreeData(data);
      setTreeData(cleanedData);
    }
  };

  // Update Dimensions on Resize
  useEffect(() => {
    loadTreeData();
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = dimensions;

  return (
    <div style={containerStyles}>
      {treeData ? (
        <Tree
          data={treeData}
          nodeSvgShape={getNodeShape(width)}
          orientation="vertical"
          pathFunc="step"
          separation={{ siblings: width > 768 ? 2 : 1.2, nonSiblings: 2 }}
          translate={{
            x: width / 2,
            y: height / 6,
          }}
          scaleExtent={{ min: 0.5, max: 1.5 }} // Zooming for responsiveness
          zoom={width > 768 ? 1 : 0.7}  // Shrink for mobile
          allowForeignObjects
          nodeLabelComponent={{
            render: <NodeLabel />,
            foreignObjectWrapper: {
              width: width > 768 ? 200 : 150,
              height: 100,
              y: -50,
              x: -75,
            },
          }}
        />
      ) : (
        <Box style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default MLMTree;

import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Styles for the container and scroll box
const containerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const scrollBoxStyles = {
  width: "100%",
  height: "80vh", // Set the height for the scrollable container
  overflow: "auto", // Enable scroll when content overflows
  border: "2px solid #ccc", // Optional: Add border for visibility
  borderRadius: "8px", // Optional: Add border-radius for smooth edges
  position: "relative",
  backgroundColor: "#f4f4f4", // Optional: Set background color for the scrollable box
};

const getNodeShape = (width) => ({
  shape: "rect",
  shapeProps: {
    width: width > 768 ? 180 : 120,
    height: width > 768 ? 50 : 40,
    x: width > 768 ? -90 : -60,
    y: -20,
    fill: "#ffffff",
    stroke: "#2F80ED",
    rx: 8,
  },
});

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
  const { mlmId } = useParams();
  const [treeData, setTreeData] = useState(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Fetch Tree Data from API
  const fetchMLMTree = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get_mlm_tree/${mlmId}/`);
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
        <Box style={scrollBoxStyles}>
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
            scaleExtent={{ min: 0.5, max: 1.5 }}
            zoom={width > 768 ? 1 : 0.7}
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
            onNodeClick={(nodeData) => {
              console.log(nodeData.data.name)
            }}
          />
        </Box>
      ) : (
        <Box style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default MLMTree;

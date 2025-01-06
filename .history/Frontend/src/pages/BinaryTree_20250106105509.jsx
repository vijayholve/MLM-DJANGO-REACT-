import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// API call to fetch MLM data from Django

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
    <div style={{ width: "100%", height: "80vh" }}>
      {treeData ? (
        <Tree
          data={treeData}
          translate={{ x: 400, y: 50 }}
          orientation="vertical"
          nodeSvgShape={{
            shape: "circle",
            shapeProps: { r: 20, fill: "#4CAF50" },
          }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={({ nodeDatum }) => (
            <g>
              <circle r={25} fill="#4CAF50" />
              <text
                x="0"
                y="-30"
                textAnchor="middle"
                fill="white"
                fontSize="14px"
              >
                {nodeDatum.name || "User"}
              </text>
              <text
                x="0"
                y="30"
                textAnchor="middle"
                fill="gray"
                fontSize="12px"
              >
                {nodeDatum.rank || "Level 1"}
              </text>
            </g>
          )}
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

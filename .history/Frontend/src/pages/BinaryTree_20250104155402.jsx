import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";

// API call to fetch MLM data from Django

const MLMTree = () => {
  const [treeData, setTreeData] = useState([]);

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
    return data.map(node => {
      // Clean up any null values in the children array
      if (node.children) {
        node.children = node.children.filter(child => child !== null); // Remove null values
      }
      // Recursively clean children if necessary
      if (node.children && node.children.length > 0) {
        node.children = cleanTreeData(node.children);
      }
      return node;
    });
  };
  
  const loadTreeData = async () => {
    const data = await fetchMLMTree();
    if (data && Array.isArray(data)) {
      const cleanedData = cleanTreeData(data); // Clean the data
      console.log("Cleaned tree data:", cleanedData);
      setTreeData([cleanedData]); // Pass cleaned data to the tree
    } else {
      console.error("Invalid data format received:", data);
    }
  };
  useEffect(() => {

    loadTreeData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {treeData.length > 0 ? (
        <Tree
          data={treeData}
          translate={{ x: 400, y: 50 }}
          orientation="vertical"
          nodeSvgShape={{
            shape: "circle",
            shapeProps: { r: 20, fill: "#4caf50" },
          }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={({ nodeDatum }) => {
            if (!nodeDatum) return <div>Loading...</div>; // Ensure nodeDatum is not null

            return (
              <g>
                <circle r={25} fill="#4caf50" />
                <text x="0" y="-35" textAnchor="middle" fill="black">
                  {nodeDatum.name || "N/A"}{" "}
                  {/* Handle case where name is undefined */}
                </text>
                <text x="0" y="35" textAnchor="middle" fill="gray">
                  {nodeDatum.rank || "Unknown"} - $
                  {nodeDatum.total_sales || "0.00"}
                </text>
              </g>
            );
          }}
        />
      ) : (
        <p>Loading MLM Tree...</p>
      )}
    </div>
  );
};

export default MLMTree;

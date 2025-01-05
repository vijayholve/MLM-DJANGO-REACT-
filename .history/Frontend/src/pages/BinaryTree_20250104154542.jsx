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
          console.log(data);  // Log the fetched data
          return data;
        } catch (error) {
          console.error("Failed to fetch MLM tree:", error);
          return null;
        }
    };
    

  useEffect(() => {
    const loadTreeData = async () => {
      const data = await fetchMLMTree();
      if (data) {
        setTreeData([data]); // react-d3-tree expects array format
      }
    };
  
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
            if (!nodeDatum) return null;  // Return null if nodeDatum is undefined or null
            return (
              <g>
                <circle r={25} fill="#4caf50"></circle>
                <text x="0" y="-35" textAnchor="middle" fill="black">
                  {nodeDatum.name}
                </text>
                <text x="0" y="35" textAnchor="middle" fill="gray">
                  {nodeDatum.rank} - ${nodeDatum.total_sales}
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
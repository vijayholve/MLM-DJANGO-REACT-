import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

// API call to fetch MLM data from Django
const fetchMLMTree = async () => {
  const response = await fetch('        "http://127.0.0.1:8000/api/mlm-users/",
');  // Django API endpoint
  const data = await response.json();
  return data;
};

const MLMTree = () => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    const loadTreeData = async () => {
      const data = await fetchMLMTree();
      setTreeData([data]);  // react-d3-tree expects array format
    };

    loadTreeData();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {treeData.length > 0 ? (
        <Tree
          data={treeData}
          translate={{ x: 400, y: 50 }}
          orientation="vertical"
          nodeSvgShape={{
            shape: 'circle',
            shapeProps: { r: 20, fill: '#4caf50' },
          }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={({ nodeDatum }) => (
            <g>
              <circle r={25} fill="#4caf50"></circle>
              <text x="0" y="-35" textAnchor="middle" fill="black">
                {nodeDatum.name}
              </text>
              <text x="0" y="35" textAnchor="middle" fill="gray">
                {nodeDatum.rank} - ${nodeDatum.total_sales}
              </text>
            </g>
          )}
        />
      ) : (
        <p>Loading MLM Tree...</p>
      )}
    </div>
  );
};

export default MLMTree;

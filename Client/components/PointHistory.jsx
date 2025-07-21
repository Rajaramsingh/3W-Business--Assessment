import React from 'react';

const PointHistory = ({ history }) => {
  return (
    <div className="section">
      <h2>Users History</h2>
      <table className="history-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>User Name</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.slice(0, 10).map((record, index) => (
            <tr key={index}>
              <td style={{ padding: "8px" }}>{record.userName}</td>
             
              <td style={{ padding: "8px" }}>
                {new Date(record.claimedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointHistory;
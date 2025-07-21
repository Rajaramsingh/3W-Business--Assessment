import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div className="section">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>Rank</th>
            <th style={{ textAlign: "left", padding: "8px" }}>User Name</th>
            <th style={{ textAlign: "left", padding: "8px" }}> Total Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ padding: "8px" }}>#{user.rank}</td>
              <td style={{ padding: "8px" }}>{user.name}</td>
              <td style={{ padding: "8px" }}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
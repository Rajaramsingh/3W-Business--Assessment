import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLeaderboard } from './hooks/useLeaderboard';
import UserSelector from '../components/UserSelector';
import AddUser from '../components/AddUser';
import Message from '../components/Message';
import Leaderboard from '../components/Leaderboard';
import PointHistory from '../components/PointHistory';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const {
    users,
    history,
    loading,
    message,
    claimPoints,
    addUser,
  } = useLeaderboard();

  useEffect(() => {
    if (users.length > 0 && !selectedUser) {
      setSelectedUser(users[0].id);
    }
  }, [users, selectedUser]);

  const handleClaimPoints = () => {
    if (!selectedUser) return;
    claimPoints(selectedUser);
  };

  const handleAddUser = async (name) => {
    const newUserId = await addUser(name);
    if (newUserId) {
      setSelectedUser(newUserId);
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <h1>Leaderboard System</h1>
          <nav className='main-nav' >
            <Link to="/" className='nav-link'> Users Leaderboard</Link>
            <Link to="/history" className='nav-link'>User History</Link>
          </nav>
          <Message message={message} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UserSelector
                    users={users}
                    selectedUser={selectedUser}
                    onUserSelect={setSelectedUser}
                    onClaimPoints={handleClaimPoints}
                    loading={loading}
                  />
                  {/* <AddUser
                    onAddUser={handleAddUser}
                    loading={loading}
                  /> */}
                  <Leaderboard users={users} />
                </>
              }
            />
            <Route
              path="/history"
              element={<PointHistory history={history} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
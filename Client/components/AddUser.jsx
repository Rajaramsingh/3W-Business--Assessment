import React, { useState } from 'react';

const AddUser = ({ onAddUser, loading }) => {
  const [newUserName, setNewUserName] = useState('');

  const handleSubmit = async () => {
    if (!newUserName.trim()) 
        return;
    
    const newUserId = await onAddUser(newUserName.trim());
    if (newUserId) {
      setNewUserName('');
    }
  };

  return (
    <div className="section">
      <h2>Add New User</h2>
      <div className="add-user">
        <input
          type="text"
          placeholder="Enter user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          disabled={loading}
        />
        <button 
          onClick={handleSubmit}
          disabled={!newUserName.trim() || loading}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
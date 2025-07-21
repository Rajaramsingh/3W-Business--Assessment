import React from 'react';

const UserSelector = ({
    users,
    selectedUser,
    onUserSelect,
    onClaimPoints,
    loading
}) => {
    return (
        <div >
            <h2>Select User</h2>

            <div className='userSelection'>
                <select value={selectedUser}
                onChange={(e) => onUserSelect(e.target.value)}>
                    <option value="">You select a user</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                    
                </select>
                <button
                onClick={onClaimPoints}
                disabled={!selectedUser || loading}
                className='claim-btn'
                >Claim Points</button>
            </div>
        </div>
    )
}
export default UserSelector;
import React from 'react';

const UserLeaderboard = ({ users }) => {
  return (
    <div className="user-leaderboard">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={user.id} className="user-card">
            <p>Rank #{index + 1}</p>
            <div className="user-info">
              <img
                src={user.profilePicture || 'default-profile.png'}
                alt={`User ${user.name}`}
                className="user-profile-picture"
              />
              <div>
                <h3>{user.name}</h3>
                <p>Total Engagement: {user.totalEngagement}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UserLeaderboard;

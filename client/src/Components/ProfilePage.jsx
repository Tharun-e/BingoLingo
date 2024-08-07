// ProfilePage.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={styles.profileContainer}>
      <h2>Profile Page</h2>
      {user.email ? (
        <div style={styles.profileDetails}>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  profileDetails: {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ProfilePage;

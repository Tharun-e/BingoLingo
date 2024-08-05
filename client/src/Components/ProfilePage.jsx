import React, { useContext } from 'react';
import { UserContext } from './UserContext'; 

const ProfilePage = () => {
  const { userEmail } = useContext(UserContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Profile Page</h1>
      <p style={styles.email}>Email: {userEmail}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  email: {
    fontSize: '1.2rem',
  },
};

export default ProfilePage;

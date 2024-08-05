// src/UserContext.jsx
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('example@example.com'); // Replace with actual email or logic

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
};

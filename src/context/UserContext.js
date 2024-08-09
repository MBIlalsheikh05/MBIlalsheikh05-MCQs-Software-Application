// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [quizResults, setQuizResults] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setQuizResults([]);
  };

  const submitQuizResult = (result) => {
    setQuizResults([...quizResults, result]);
  };

  return (
    <UserContext.Provider value={{ user, quizResults, login, logout, submitQuizResult }}>
      {children}
    </UserContext.Provider>
  );
};

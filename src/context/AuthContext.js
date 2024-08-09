import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Mock login function
  const login = (email, password) => {
    // Replace this with your actual authentication logic
    if (email === "test@test.com" && password === "password") {
      setIsAuthenticated(true);
      navigate('/useroption');  // Redirect to the UserOption page after login
    } else {
      alert("Invalid credentials");
    }
  };

  // Mock logout function
  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');  // Redirect to the login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

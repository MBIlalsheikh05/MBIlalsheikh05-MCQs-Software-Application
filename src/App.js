import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import HomePage from './component2/HomePage';
import AdminDashboard from './component2/AdminDashboard';
import ManageQuestions from './component2/ManageQuestions';
import ManageUsers from './component2/ManageUsers';
import UserDashboard from './component2/UserDashboard';
import Register from './component2/Register';
import Login from './component2/Login';
import Quiz from './Components/Quiz';
import UserOptions from './component2/UserOptions';
import Results from './component2/Results';
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/manage-questions" element={<ManageQuestions />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/quiz" element={<Quiz />} />
          <Route path="/user/results" element={<Results />} />
          <Route path='/user/useroption' element={<UserOptions />} />  {/* Corrected route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

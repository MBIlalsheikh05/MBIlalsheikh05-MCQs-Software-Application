import React from 'react';
import { Link } from 'react-router-dom';
// import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">
        User Dashboard
      </h1>
      <div className="flex flex-col gap-6">
        <Link to="/user/register" className="w-full">
          <button 
            className="w-full bg-purple-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Register
          </button>
        </Link>
        <Link to="/user/login" className="w-full">
          <button 
            className="w-full bg-teal-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
export default UserDashboard;



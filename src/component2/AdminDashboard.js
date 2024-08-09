import React from 'react';
import { Link } from 'react-router-dom';
// import './AdminDashboard.css'; // Import specific CSS

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">
        Admin Dashboard
      </h1>
      <div className="flex flex-col gap-6">
        <Link to="/admin/manage-questions" className="w-full">
          <button 
            className="w-full bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Manage Questions
          </button>
        </Link>
        <Link to="/admin/manage-users" className="w-full">
          <button 
            className="w-full bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Manage Users
          </button>
        </Link>
      </div>
    </div>
  );
}

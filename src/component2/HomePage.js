import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 font-sans">
    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
      Welcome to the Quiz Application
    </h1>
    <div className="flex gap-6">
      <button 
        className="bg-blue-500 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => navigate('/admin')}
      >
        Admin Portal
      </button>
      <button 
        className="bg-green-500 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={() => navigate('/user')}
      >
        User Portal
      </button>
    </div>
  </div>
  );
}

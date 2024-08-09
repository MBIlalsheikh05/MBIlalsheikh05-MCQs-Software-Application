import React from 'react'
import { Link } from 'react-router-dom';

export const UserOptions = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        User Options
      </h1>
      <div className="flex flex-col gap-6">
        <Link to="/user/quiz" className="w-full">
          <button 
            className="w-full bg-indigo-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Take Quiz
          </button>
        </Link>
        <Link to="/user/results" className="w-full">
          <button 
            className="w-full bg-teal-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            View Results
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserOptions;

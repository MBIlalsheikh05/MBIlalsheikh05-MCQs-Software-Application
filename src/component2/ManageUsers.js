import React, { useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]); // Initial users list
  const [newUser, setNewUser] = useState({ username: '', email: '' });

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ username: '', email: '' });
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Users
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-green-600 text-white py-3 px-4 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
      <ul className="w-full max-w-lg mt-8 space-y-4">
        {users.map((user, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div>
              <strong className="text-lg text-gray-900">Username: {user.username}</strong>
              <p className="text-gray-700">Email: {user.email}</p>
              <button
                className="mt-4 bg-red-600 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={() => handleDeleteUser(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;

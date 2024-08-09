import React, { useState } from 'react';

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]); // Initial questions list
  const [newQuestion, setNewQuestion] = useState({ question: '', options: [], answer: '' });

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: '', options: [], answer: '' });
  };

  const handleDeleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Questions
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <input
          type="text"
          placeholder="Question"
          value={newQuestion.question}
          onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Options (comma separated)"
          value={newQuestion.options.join(', ')}
          onChange={(e) => setNewQuestion({ ...newQuestion, options: e.target.value.split(',').map(opt => opt.trim()) })}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Answer"
          value={newQuestion.answer}
          onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-green-600 text-white py-3 px-4 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      </div>
      <ul className="w-full max-w-lg mt-8 space-y-4">
        {questions.map((q, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div>
              <strong className="text-lg text-gray-900">Q: {q.question}</strong>
              <p className="text-gray-700">Options: {q.options.join(', ')}</p>
              <p className="text-gray-700">Answer: {q.answer}</p>
              <button
                className="mt-4 bg-red-600 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={() => handleDeleteQuestion(index)}
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

export default ManageQuestions;

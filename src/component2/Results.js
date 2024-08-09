import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import './Results.css';

const Results = () => {
  const { quizResults } = useContext(UserContext);

  return (
    <div className="results-container">
      <h1>Your Quiz Results</h1>
      {quizResults.length === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        <ul>
          {quizResults.map((result, index) => (
            <li key={index}>
              Quiz {index + 1}: {result.score} out of {result.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;

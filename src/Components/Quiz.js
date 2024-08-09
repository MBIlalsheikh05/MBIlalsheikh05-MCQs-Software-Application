import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css';  // Import the updated CSS

export default function Quiz() {
    const questions = [
        { question: "What is React?", options: ['JS Framework', 'JS Library', 'Programming Language', 'Tool'], answer: 'JS Library' },
        { question: "What is Java?", options: ['Framework', 'Library', 'Programming Language', 'Tool'], answer: 'Programming Language' },
        { question: "What is Visual Studio?", options: ['Compiler', 'Code Runner', 'Language', 'Tool'], answer: 'Tool' },
        { question: "Which of the following is a JavaScript framework?", options: ['Angular', 'Django', 'Rails', 'Laravel'], answer: 'Angular' },
        { question: "What is the primary purpose of CSS?", options: ['To add interactivity', 'To define the structure of a webpage', 'To style the appearance of a webpage', 'To manage databases'], answer: 'To style the appearance of a webpage' },
        { question: "Which database is NoSQL?", options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'], answer: 'MongoDB' },
        { question: "What does API stand for?", options: ['Application Programming Interface', 'Applied Programming Interface', 'Advanced Programming Integration', 'Automated Process Interface'], answer: 'Application Programming Interface' }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [quizEnded, setQuizEnded] = useState(false);
    const [score, setScore] = useState(0);

    const handleClick = (option) => {
        setCurrentAnswer(option);
    };

    const handleNextQuestion = () => {
        if (currentAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentAnswer(null);
        } else {
            setQuizEnded(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setCurrentAnswer(null);
        setQuizEnded(false);
        setScore(0);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>MCQ Quiz Application</h1>
            </div>
            <div className="question-section">
                <div className="progress-bar">
                    <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
                </div>
                {quizEnded ? (
                    <div className="result">
                        <h1>Quiz Finished!</h1>
                        <p>Your Score: {score} out of {questions.length}</p>
                        <button className='button' onClick={handleRestart}>Restart Quiz</button>
                    </div>
                ) : (
                    <QuestionList
                        question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options}
                        handleClick={handleClick}
                        currentAnswer={currentAnswer}
                    />
                )}
            </div>
            {!quizEnded && (
                <div className="button-section">
                    <button
                        disabled={currentAnswer === null}
                        className={currentAnswer === null ? 'button-disable' : 'button'}
                        onClick={handleNextQuestion}
                    >
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
}



// import React, { useState, useContext } from 'react';
// import QuestionList from './QuestionList';
// import { UserContext } from '../context/UserContext';
// import './Quiz.css';
// import './Quiz.css';

// export default function Quiz() {
//     const { submitQuizResult } = useContext(UserContext);

//     const questions = [ 
//         { question: "What is React?", options: ['JS Framework', 'JS Library', 'Programming Language', 'Tool'], answer: 'JS Library' },
//                 { question: "What is Java?", options: ['Framework', 'Library', 'Programming Language', 'Tool'], answer: 'Programming Language' },
//                 { question: "What is Visual Studio?", options: ['Compiler', 'Code Runner', 'Language', 'Tool'], answer: 'Tool' },
//                 { question: "Which of the following is a JavaScript framework?", options: ['Angular', 'Django', 'Rails', 'Laravel'], answer: 'Angular' },
//                 { question: "What is the primary purpose of CSS?", options: ['To add interactivity', 'To define the structure of a webpage', 'To style the appearance of a webpage', 'To manage databases'], answer: 'To style the appearance of a webpage' },
//                 { question: "Which database is NoSQL?", options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'], answer: 'MongoDB' },
//                 { question: "What does API stand for?", options: ['Application Programming Interface', 'Applied Programming Interface', 'Advanced Programming Integration', 'Automated Process Interface'], answer: 'Application Programming Interface' }
            
//      ];
    
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [currentAnswer, setCurrentAnswer] = useState(null);
//     const [quizEnded, setQuizEnded] = useState(false);
//     const [score, setScore] = useState(0);

//     const handleClick = (option) => {
//         setCurrentAnswer(option);
//     };

//     const handleNextQuestion = () => {
//         if (currentAnswer === questions[currentQuestionIndex].answer) {
//             setScore(score + 1);
//         }

//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//             setCurrentAnswer(null);
//         } else {
//             setQuizEnded(true);
//             submitQuizResult({ score, total: questions.length });
//         }
//     };

//     const handleRestart = () => {
//         setCurrentQuestionIndex(0);
//         setCurrentAnswer(null);
//         setQuizEnded(false);
//         setScore(0);
//     };

//     return (
//         <div className="quiz-container">
//             {quizEnded ? (
//                 <div>
//                     <h1>Quiz Finished!</h1>
//                     <p>Your Score: {score} out of {questions.length}</p>
//                     <button className="button" onClick={handleRestart}>Restart Quiz</button>
//                 </div>
//             ) : (
//                 <div>
//                     <QuestionList 
//                         question={questions[currentQuestionIndex].question}
//                         options={questions[currentQuestionIndex].options} 
//                         handleClick={handleClick} 
//                         currentAnswer={currentAnswer} 
//                     />
//                     <div className="progress">
//                         <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
//                     </div>
//                     <button 
//                         disabled={currentAnswer === null} 
//                         className={currentAnswer === null ? 'button-disable' : 'button'}  
//                         onClick={handleNextQuestion}
//                     >
//                         Next Question
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

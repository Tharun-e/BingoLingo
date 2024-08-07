import React, { useState } from 'react';
import "./Styles.css";

function FrenchQuiz() {
    const [score, setScore] = useState(null);

    const questions = [
        { question: '1. What does "Bonjour" mean in English?', answers: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Hello' },
        { question: '2. What is the French word for "Thank you"?', answers: ['Merci', 'Bonjour', 'Au revoir', 'Excusez-moi'], correctAnswer: 'Merci' },
        { question: '3. How do you say "Good morning" in French?', answers: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'], correctAnswer: 'Bonjour' },
        { question: '4. What does "Excusez-moi" mean?', answers: ['Excuse me', 'Goodbye', 'Yes', 'No'], correctAnswer: 'Excuse me' },
        { question: '5. What is the French word for "Family"?', answers: ['Famille', 'Amis', 'École', 'Maison'], correctAnswer: 'Famille' },
        { question: '6. How do you say "Good night" in French?', answers: ['Bonne nuit', 'Bonjour', 'Merci', 'À bientôt'], correctAnswer: 'Bonne nuit' },
        { question: '7. What does "Félicitations" mean?', answers: ['Congratulations', 'Sorry', 'Please', 'Help'], correctAnswer: 'Congratulations' },
        { question: '8. How do you say "How are you?" in French?', answers: ['Comment ça va?', 'Merci', 'Bonjour', 'Au revoir'], correctAnswer: 'Comment ça va?' },
        { question: '9. What is the French word for "Water"?', answers: ['Eau', 'Vin', 'Pain', 'Lait'], correctAnswer: 'Eau' },
        { question: '10. What does "Pardon" mean in English?', answers: ['Sorry', 'Thank you', 'Goodbye', 'Hello'], correctAnswer: 'Sorry' },
        { question: '11. How do you say "Yes" in French?', answers: ['Oui', 'Non', 'Peut-être', 'Jamais'], correctAnswer: 'Oui' },
        { question: '12. What is the French word for "Book"?', answers: ['Livre', 'Stylo', 'Table', 'Chaise'], correctAnswer: 'Livre' },
        { question: '13. What does "Je suis désolé" mean?', answers: ['I am sorry', 'I am happy', 'I am hungry', 'I am tired'], correctAnswer: 'I am sorry' },
        { question: '14. What is the French word for "School"?', answers: ['École', 'Université', 'Bibliothèque', 'Maison'], correctAnswer: 'École' }
    ];

    const submitQuiz = () => {
        const correctAnswers = questions.map((question, index) => {
            if (question.correctAnswer) {
                return {
                    [`french-${index + 1}`]: question.correctAnswer,
                };
            }
            return null;
        }).reduce((acc, curr) => {
            if (curr) {
                return { ...acc, ...curr };
            }
            return acc;
        }, {});
    
        let tempScore = 0;
        Object.keys(correctAnswers).forEach((key) => {
            const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[key]) {
                tempScore++;
            }
        });
    
        setScore(tempScore);
        document.getElementById('results').style.display = 'block';
    };
    

    const closeModal = () => {
        document.getElementById('results').style.display = 'none';
    };

    const tryAgain = () => {
        window.location.reload();
    };

    return (
        <div>
            <style jsx>{`
                /* Your existing styles */
                html, body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    background: #f4f4f4;
                    color: #333;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                body {
                    flex: 1;
                }

                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .logo img {
                    height: 50px;
                    transition: transform 0.3s ease;
                }

                .logo img:hover {
                    transform: scale(1.1);
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 15px;
                }

                nav ul li {
                    margin: 0;
                }

                nav ul li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                nav ul li a:hover {
                    color: #e0f7ff;
                }

                main {
                    flex: 1;
                    padding: 20px;
                    background: #fff;
                }

                .quiz-section {
                    margin: 30px auto;
                    max-width: 600px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }

                .quiz-section h2 {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    color: #00aaff;
                }

                .quiz-question {
                    margin-bottom: 20px;
                }

                .quiz-question p {
                    font-size: 1.2rem;
                    margin: 0;
                }

                .quiz-options {
                    list-style: none;
                    padding: 0;
                    margin: 10px 0;
                }

                .quiz-options li {
                    display: flex;
                    align-items: center;
                    margin: 5px 0;
                }

                .quiz-options input[type="radio"] {
                    margin-right: 10px;
                }

                .submit-button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    text-align: center;
                }

                .submit-button:hover {
                    background-color: #0088cc;
                }

                .result {
                    margin-top: 20px;
                    text-align: center;
                }

                .result p {
                    font-size: 1.2rem;
                    color: #00aaff;
                }

                footer {
                    background: #00aaff;
                    color: #fff;
                    text-align: center;
                    padding: 10px 20px;
                    width: 100%;
                    position: relative;
                    bottom: 0;
                }

                .modal {
                    display: none; 
                    position: fixed; 
                    z-index: 1; 
                    left: 0;
                    top: 0;
                    width: 100%; 
                    height: 100%; 
                    overflow: auto; 
                    background-color: rgba(0, 0, 0, 0.5); 
                }

                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    max-width: 400px;
                    text-align: center;
                    border-radius: 10px;
                }

                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }

                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }

                .modal-button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    margin: 20px 0 0;
                }

                .modal-button:hover {
                    background-color: #0088cc;
                }

                @media (max-width: 768px) {
                    .quiz-section {
                        padding: 15px;
                    }

                    .quiz-section h2 {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
            
            <main className="main">
                <section className="quiz-section">
                    <h2>French Quiz</h2>
                    <form id="quiz-form">
                        {questions.map((q, index) => (
                            <div key={index} className="quiz-question">
                                <p>{q.question}</p>
                                <ul className="quiz-options">
                                    {q.answers.map((answer, ansIndex) => (
                                        <li key={ansIndex}>
                                            <input
                                                type="radio"
                                                name={`french-${index + 1}`}
                                                value={answer}
                                            /> {answer}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div style={{ textAlign: 'center' }}>
                            <button type="button" className="submit-button" onClick={submitQuiz}>Submit Answers</button>
                        </div>
                    </form>
                    <div id="results" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <p id="result-text">You got {score} out of {questions.length} correct.</p>
                            {score === 0 && (
                                <button className="modal-button" onClick={tryAgain}>Try Again</button>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default FrenchQuiz;

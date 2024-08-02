import React from 'react';
import './Styles.css'; // Assuming you have a separate CSS file for shared styles

const FrenchQuiz = () => {
    const submitQuiz = () => {
        const correctAnswers = {
            'french-1': 'Hello',
            'french-2': 'Merci'
        };
        let score = 0;
        const form = document.getElementById('quiz-form');
        const resultModal = document.getElementById('result-modal');
        const resultText = document.getElementById('result-text');
        const tryAgainButton = document.getElementById('try-again-button');
        
        for (let key in correctAnswers) {
            const selectedOption = form.querySelector(`input[name="${key}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[key]) {
                score++;
            }
        }

        if (score === 0) {
            resultText.innerHTML = `
                <strong>Try Again!</strong> <br/>
                You scored <span class="score">${score}</span> out of ${Object.keys(correctAnswers).length}.
            `;
            tryAgainButton.style.display = 'block';
        } else {
            resultText.innerHTML = `
                <strong>Congratulations!</strong> <br/>
                You scored <span class="score">${score}</span> out of ${Object.keys(correctAnswers).length}.
            `;
            tryAgainButton.style.display = 'none';
        }

        resultModal.style.display = 'block';
    }

    const closeModal = () => {
        const resultModal = document.getElementById('result-modal');
        resultModal.style.display = 'none';
    }

    const tryAgain = () => {
        window.location.reload();
    }

    return (
        <div>
            <style jsx>{`
                /* Base styles */
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

                /* Header styling */
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                
                /* Main content styling */
                main {
                    flex: 1;
                    padding: 20px;
                    background: #fff;
                    margin-top: 90px;
                }

                .quiz-section {
                    margin-bottom: 30px;
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    background-color: #f9f9f9;
                }

                .quiz-section h2 {
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .quiz-question {
                    margin-bottom: 20px;
                }

                .quiz-question p {
                    font-size: 1.2rem;
                    margin: 0 0 10px;
                }

                .quiz-options {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .quiz-options li {
                    margin: 5px 0;
                    display: flex;
                    align-items: center;
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
                    display: block;
                    margin: 20px auto;
                }

                .submit-button:hover {
                    background-color: #0088cc;
                }

                .result {
                    display: none;
                    margin-top: 20px;
                    text-align: center;
                    animation: fadeIn 1s ease-in-out;
                }

                .result p {
                    font-size: 1.2rem;
                    color: #00aaff;
                }

                .score {
                    font-size: 2rem;
                    color: #ff6600;
                    font-weight: bold;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                /* Footer styling */
                footer {
                    background: #00aaff;
                    color: #fff;
                    text-align: center;
                    padding: 10px 20px;
                    width: 100%;
                    position: relative;
                    bottom: 0;
                }

                /* Modal styling */
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
            `}</style>
            
            <main>
                <section className="quiz-section">
                    <h2>French Quiz</h2>
                    <form id="quiz-form">
                        <div className="quiz-question">
                            <p>1. What does "Bonjour" mean in English?</p>
                            <ul className="quiz-options">
                                <li><input type="radio" name="french-1" value="Hello" /> Hello</li>
                                <li><input type="radio" name="french-1" value="Thank you" /> Thank you</li>
                                <li><input type="radio" name="french-1" value="How are you?" /> How are you?</li>
                                <li><input type="radio" name="french-1" value="Yes" /> Yes</li>
                            </ul>
                        </div>
                        <div className="quiz-question">
                            <p>2. What is the French word for "Thank you"?</p>
                            <ul className="quiz-options">
                                <li><input type="radio" name="french-2" value="Merci" /> Merci</li>
                                <li><input type="radio" name="french-2" value="Bonjour" /> Bonjour</li>
                                <li><input type="radio" name="french-2" value="Comment ça va?" /> Comment ça va?</li>
                                <li><input type="radio" name="french-2" value="Non" /> Non</li>
                            </ul>
                        </div>
                        {/* Add more questions as needed */}
                        <div style={{ textAlign: 'center' }}>
                            <button type="button" className="submit-button" onClick={submitQuiz}>Submit Answers</button>
                        </div>
                    </form>
                    <div id="result-modal" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <p id="result-text"></p>
                            <button id="try-again-button" className="modal-button" onClick={tryAgain} style={{ display: 'none' }}>Try Again</button>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    );
};

export default FrenchQuiz;

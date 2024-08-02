import React from 'react';

const HindiQuiz = () => {
    const submitQuiz = () => {
        const answers = {
            q1: "Hello",
            q2: "Thank you"
        };

        let score = 0;
        const form = document.getElementById('quiz-form');
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            if (answers[key] === value) {
                score++;
            }
        });

        const results = document.getElementById('results');
        const resultText = document.getElementById('result-text');
        const tryAgainButton = document.getElementById('try-again-button');
        
        if (score === 0) {
            resultText.innerHTML = `
                <strong>Try Again!</strong> <br/>
                You scored <span class="score">${score}</span> out of ${Object.keys(answers).length}.
            `;
            tryAgainButton.style.display = 'block';
        } else {
            resultText.innerHTML = `
                <strong>Congratulations!</strong> <br/>
                You scored <span class="score">${score}</span> out of ${Object.keys(answers).length}.
            `;
            tryAgainButton.style.display = 'none';
        }

        results.style.display = 'block';
    }

    const closeModal = () => {
        const results = document.getElementById('results');
        results.style.display = 'none';
    }

    const tryAgain = () => {
        window.location.reload();
    }

    return (
        <div>
            <style jsx>{`
                

                .quiz-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .quiz-container h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .quiz-container .question {
                    margin-bottom: 20px;
                }

                .quiz-container .question p {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }

                .quiz-container .options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .quiz-container .options label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .quiz-container .options input[type="radio"] {
                    margin-right: 10px;
                }

                .quiz-container button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto;
                }

                .quiz-container button:hover {
                    background-color: #0088cc;
                }

                #results {
                    display: none;
                    text-align: center;
                    margin-top: 20px;
                }

                #results h2 {
                    margin: 0;
                }

                .score {
                    font-size: 2rem;
                    color: #ff6600;
                    font-weight: bold;
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
                <section className="quiz-container">
                    <h1>Hindi Quiz</h1>
                    <form id="quiz-form">
                        <div className="question">
                            <p>1. What does "नमस्ते" mean in English?</p>
                            <div className="options">
                                <label><input type="radio" name="q1" value="Hello" /> Hello</label>
                                <label><input type="radio" name="q1" value="Goodbye" /> Goodbye</label>
                                <label><input type="radio" name="q1" value="Thank you" /> Thank you</label>
                                <label><input type="radio" name="q1" value="Sorry" /> Sorry</label>
                            </div>
                        </div>

                        <div className="question">
                            <p>2. What does "धन्यवाद" mean in English?</p>
                            <div className="options">
                                <label><input type="radio" name="q2" value="Hello" /> Hello</label>
                                <label><input type="radio" name="q2" value="Goodbye" /> Goodbye</label>
                                <label><input type="radio" name="q2" value="Thank you" /> Thank you</label>
                                <label><input type="radio" name="q2" value="Sorry" /> Sorry</label>
                            </div>
                        </div>

                        <button type="button" onClick={submitQuiz}>Submit Answers</button>
                    </form>

                    <div id="results" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <p id="result-text"></p>
                            <button id="try-again-button" className="modal-button" onClick={() => window.location.reload()} style={{ display: 'none' }}>Try Again</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HindiQuiz;

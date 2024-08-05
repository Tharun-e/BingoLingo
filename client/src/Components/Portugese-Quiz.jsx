import React, { useState } from 'react';

function PortugueseQuiz() {
    const [score, setScore] = useState(null);

    const questions = [
        { question: '1. What does "Olá" mean in English?', answers: ['Hello', 'Thank you', 'How are you?', 'Yes'], correctAnswer: 'Hello' },
        { question: '2. What is the Portuguese word for "Thank you"?', answers: ['Obrigado', 'Olá', 'Como vai?', 'Não'], correctAnswer: 'Obrigado' },
        { question: '3. What does "Sim" mean in English?', answers: ['Yes', 'No', 'Please', 'Sorry'], correctAnswer: 'Yes' },
        { question: '4. What does "Bom dia" mean?', answers: ['Good morning', 'Good night', 'Good afternoon', 'Hello'], correctAnswer: 'Good morning' },
        { question: '5. What is the Portuguese word for "Good night"?', answers: ['Boa noite', 'Bom dia', 'Boa tarde', 'Adeus'], correctAnswer: 'Boa noite' },
        { question: '6. How do you say "How are you?" in Portuguese?', answers: ['Como vai?', 'Olá', 'Tudo bem?', 'Oi'], correctAnswer: 'Como vai?' },
        { question: '7. What does "Desculpe" mean?', answers: ['Sorry', 'Excuse me', 'Please', 'Thank you'], correctAnswer: 'Sorry' },
        { question: '8. What is the Portuguese word for "Water"?', answers: ['Água', 'Vinho', 'Suco', 'Cerveja'], correctAnswer: 'Água' },
        { question: '9. How do you say "Goodbye" in Portuguese?', answers: ['Adeus', 'Tchau', 'Até logo', 'Até amanhã'], correctAnswer: 'Adeus' },
        { question: '10. What does "Por favor" mean?', answers: ['Please', 'Thank you', 'You\'re welcome', 'Excuse me'], correctAnswer: 'Please' },
        { question: '11. What is the Portuguese word for "Friend"?', answers: ['Amigo', 'Inimigo', 'Pessoa', 'Colega'], correctAnswer: 'Amigo' },
        { question: '12. How do you say "I love you" in Portuguese?', answers: ['Eu te amo', 'Eu gosto de você', 'Você é especial', 'Você é meu'], correctAnswer: 'Eu te amo' },
        { question: '13. What does "Feliz" mean?', answers: ['Happy', 'Sad', 'Angry', 'Excited'], correctAnswer: 'Happy' },
        { question: '14. What is the Portuguese word for "Family"?', answers: ['Família', 'Casa', 'Amigos', 'Comunidade'], correctAnswer: 'Família' },
        { question: '15. How do you say "See you later" in Portuguese?', answers: ['Até logo', 'Adeus', 'Tchau', 'Até amanhã'], correctAnswer: 'Até logo' }
    ];

    const submitQuiz = () => {
        let tempScore = 0;
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.correctAnswer) {
                tempScore++;
            }
        });
        setScore(tempScore);
        document.getElementById('results').style.display = 'block';
    };

    const closeModal = () => {
        document.getElementById('results').style.display = 'none';
    }

    const tryAgain = () => {
        window.location.reload();
    }

    return (
        <div>
            <style jsx>{`
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
                    <h2>Portuguese Quiz</h2>
                    <form id="quiz-form">
                        {questions.map((q, index) => (
                            <div key={index} className="quiz-question">
                                <p>{q.question}</p>
                                <ul className="quiz-options">
                                    {q.answers.map((answer, i) => (
                                        <li key={i}>
                                            <input type="radio" name={`question-${index}`} value={answer} /> {answer}
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

export default PortugueseQuiz;

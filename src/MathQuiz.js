import React, { useState } from 'react';

const getRandomQuestion = (min, max, operators) => {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return `${num1} ${operator} ${num2}`;
};

const operators = ['+', '-', '*', '/'];

const evaluate = (userAnswer, question) => {
  const [num1, operator, num2] = question.split(' ');
  const [a, b] = num1.split('').map(Number);
  const [c, d] = num2.split('').map(Number);

  switch (operator) {
    case '+':
      return a + b === c + d;
    case '-':
      return a - b === c - d;
    case '*':
      return a * b === c * d;
    case '/':
      return a / b === c / d;
    default:
      return false;
  }
};

const isAnswerCorrect = (question, userAnswer) => {
  const correctAnswer = evaluate(question, question);
  return correctAnswer === evaluate(userAnswer, question);
};

const MathQuiz = () => {
  const [question, setQuestion] = useState(getRandomQuestion(1, 10, operators));
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

/**  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCorrect(isAnswerCorrect(question, answer));
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>{question}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
    </div>
  );
};

export default MathQuiz;


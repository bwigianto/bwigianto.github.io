function generateRandomMathQuestion() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const questionText = `${num1} ${operator} ${num2}`;
    document.getElementById('question').innerText = questionText;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('userAnswer').value);
    const correctAnswer = parseInt(document.getElementById('question').innerText.split(' ')[0]);
    const result = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        result.innerText = 'Correct!';
    } else {
        result.innerText = 'Wrong!';
    }
}

document.getElementById('question').innerText = generateRandomMathQuestion();


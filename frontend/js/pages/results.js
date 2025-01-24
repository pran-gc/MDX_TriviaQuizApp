window.onload = function () {
    const quizData = JSON.parse(sessionStorage.getItem('quizData'));
    const userAnswers = JSON.parse(sessionStorage.getItem('userAnswers'));
    const username = sessionStorage.getItem('username');
    if (!quizData || !userAnswers || !username) {
        alert('No quiz data found.');
        window.location.href = '../index.html';
        return;
    }

    const resultsContainer = document.getElementById('results-container');
    let score = 0;

    quizData.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<h3>Question ${index + 1}: ${question.question}</h3>`;

        const answersElement = document.createElement('ul');
        answersElement.className = 'answers';

        const allAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
        allAnswers.forEach(answer => {
            const listItem = document.createElement('li');
            listItem.textContent = answer;
            if (answer === question.correct_answer) {
                listItem.className = 'correct';
            } else if (answer === userAnswers[index]) {
                listItem.className = 'incorrect';
            }
            answersElement.appendChild(listItem);
        });

        if (userAnswers[index] === question.correct_answer) {
            score++;
        }

        questionElement.appendChild(answersElement);
        resultsContainer.appendChild(questionElement);
    });

    const scoreElement = document.createElement('div');
    scoreElement.className = 'score';
    scoreElement.textContent = `Your score: ${score} / ${quizData.length}`;
    resultsContainer.appendChild(scoreElement);

    const leaderboardButton = document.createElement('button');
    leaderboardButton.className = 'leaderboard-button';
    leaderboardButton.textContent = 'Leaderboard';
    leaderboardButton.onclick = function () {
        // Save quiz history to localStorage
        const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
        quizHistory.push({ category: quizData[0].category, score: score });
        localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

        // Update leaderboard score in localStorage
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
        if (leaderboard[username]) {
            leaderboard[username] += score;
        } else {
            leaderboard[username] = score;
        }
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

        window.location.href = '../index.html';
    };
    resultsContainer.appendChild(leaderboardButton);
};
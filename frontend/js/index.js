window.onload = function () {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location.href = './pages/login.html';
    } else {
        document.getElementById('welcome-message').innerText = `Hello, ${username}`;
    }

    document.getElementById('logout-button').onclick = function () {
        sessionStorage.removeItem('username');
        window.location.href = './pages/login.html';
    }

    // Fetch categories and display them in a dropdown
    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            const categories = data.trivia_categories;
            const categoriesDropdown = document.getElementById('categories-dropdown');
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categoriesDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));

    // Display leaderboard
    const leaderboardContainer = document.getElementById('leaderboard-container');
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
    if (Object.keys(leaderboard).length === 0) {
        leaderboardContainer.innerHTML = '<p>No data present</p>';
    } else {
        const leaderboardList = document.createElement('ul');
        leaderboardList.className = 'leaderboard';

        for (const user in leaderboard) {
            const userEntry = document.createElement('li');
            userEntry.textContent = `${user}: ${leaderboard[user]} points`;
            leaderboardList.appendChild(userEntry);
        }

        leaderboardContainer.appendChild(leaderboardList);
    }

    // Display quiz history
    const historyContainer = document.getElementById('history-container');
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    if (quizHistory.length === 0) {
        historyContainer.innerHTML = '<p>No quiz history available</p>';
    } else {
        const historyList = document.createElement('ul');
        historyList.className = 'history';

        quizHistory.forEach(quiz => {
            const historyItem = document.createElement('li');
            historyItem.textContent = `Category: ${quiz.category}, Score: ${quiz.score}`;
            historyList.appendChild(historyItem);
        });

        historyContainer.appendChild(historyList);
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const formTitle = document.getElementById('form-title');
    const authForm = document.getElementById('auth-form');
    const toggleLink = document.getElementById('toggle-link');
    const baseURL = 'https://mdx-quiz-app.onrender.com';

    toggleLink.addEventListener('click', () => {
        if (formTitle.textContent === 'Sign In') {
            formTitle.textContent = 'Register';
            authForm.innerHTML = `
                <input type="text" id="username" placeholder="Username" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Register</button>
                <p id="error-message" style="color: red;"></p>
            `;
            toggleLink.textContent = 'Already have an account? Sign In';
        } else {
            formTitle.textContent = 'Sign In';
            authForm.innerHTML = `
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Sign In</button>
                <p id="error-message" style="color: red;"></p>
            `;
            toggleLink.textContent = "Don't have an account? Register";
        }
    });

    authForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (formTitle.textContent === 'Sign In') {
            // Perform login
            fetch(`${baseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        sessionStorage.setItem('username', username);
                        alert('Login successful!');
                        window.location.href = '../index.html';
                        // Redirect or perform other actions
                    } else {
                        errorMessage.textContent = 'Login failed: ' + data.message;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    errorMessage.textContent = 'An error occurred. Please try again.';
                });
        } else {
            // Perform registration
            const email = document.getElementById('email').value;
            fetch(`${baseURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Registration successful!');
                        // Redirect or perform other actions
                    } else {
                        errorMessage.textContent = 'Registration failed: ' + data.message;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    errorMessage.textContent = 'An error occurred. Please try again.';
                });
        }
    });
});
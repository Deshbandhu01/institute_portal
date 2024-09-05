document.getElementById('student-btn').addEventListener('click', function() {
    showLoginForm('Student', '../student/index.html'); // Path to student login page
});

document.getElementById('faculty-btn').addEventListener('click', function() {
    showLoginForm('Faculty', '../faculty/index.html'); // Path to faculty login page
});

function showLoginForm(userType, actionUrl) {
    const loginFormContainer = document.getElementById('login-form');
    
    loginFormContainer.innerHTML = `
        <h2>${userType} Login</h2>
        <form action="${actionUrl}" method="post">
            <label for="username">${userType} ID</label>
            <input type="text" id="username" name="username" placeholder="${userType} ID" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `;
    
    loginFormContainer.style.display = 'block';
}
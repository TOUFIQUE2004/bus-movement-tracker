document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === 'admin' && password === 'password123') {
        sessionStorage.setItem('loggedIn', 'true');
        alert('Login successful');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});

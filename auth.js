document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
});

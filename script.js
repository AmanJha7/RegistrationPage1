const form = document.querySelector('#registration-form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', function(event) {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if password contains at least 8 characters, including 4 digits and 1 special symbol
    const passwordRegex = /^(?=.*\d{4})(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password)) {
        event.preventDefault();
        passwordInput.classList.add('error-border');
        confirmPasswordInput.classList.add('error-border');
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error');
        errorMessage.innerText = 'Password must contain at least 8 characters, including 4 digits and 1 special symbol';
        confirmPasswordInput.parentElement.insertBefore(errorMessage, confirmPasswordInput.nextSibling);
    }
});

// Remove the error style and message on input change
passwordInput.addEventListener('input', function() {
    if (passwordInput.classList.contains('error-border')) {
        passwordInput.classList.remove('error-border');
        confirmPasswordInput.classList.remove('error-border');
        const errorMessage = confirmPasswordInput.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error')) {
            errorMessage.remove();
        }
    }
});

confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.classList.contains('error-border')) {
        passwordInput.classList.remove('error-border');
        confirmPasswordInput.classList.remove('error-border');
        const errorMessage = confirmPasswordInput.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error')) {
            errorMessage.remove();
        }
    }
});

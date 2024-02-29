document.addEventListener('DOMContentLoaded', function() {
    const name = prompt("Please enter your name:");
    const welcomeMsg = document.getElementById('welcome-msg');
    welcomeMsg.textContent = `Hi ${name}, Welcome to Our Website!`;
});

function validateForm() {
    event.preventDefault();
    
    // Get form input values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var phoneRegex = /^\d{11,12}$/; 

    var valid = true;

    // Validate name
    if (name === '' || !nameRegex.test(name)) {
        valid = false;
        alert('Please enter a valid name.');
    }

    // Validate email
    if (email === '' || !emailRegex.test(email)) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    // Validate phone number
    if (phone === '' || !phoneRegex.test(phone)) {
        valid = false;
        alert('Please enter a valid phone number (11 or 12 digits without spaces or special characters).');
    }

    // Validate message
    if (message === '') {
        valid = false;
        alert('Please enter a message.');
    }

    // If form is valid, display output
    if (valid) {
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-email').textContent = email;
        document.getElementById('output-phone').textContent = phone;
        document.getElementById('output-message').textContent = message;
        document.getElementById('output-container').style.display = 'block';
    }

    return valid; // Return form validity status
}


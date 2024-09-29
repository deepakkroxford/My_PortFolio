// Show the loading screen initially
document.querySelector('.loading-screen').classList.remove('hidden');

// Hide the loading screen when the page has loaded
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');

    // Set a timeout to ensure the loading screen remains visible for a short period
    setTimeout(() => {
        loadingScreen.classList.add('hidden'); // Add hidden class to fade out
    }, 5000); // Delay (in milliseconds) before starting to fade out
});

const welcomeMessage = document.getElementById("welcome-message");
const message = welcomeMessage.innerText; // Capture the message including spaces
welcomeMessage.innerText = ""; // Clear the message initially

// Function to display the message one character at a time
function showMessage() {
    let index = 0;
    const characters = message.split(''); // Split the message into an array of characters

    const interval = setInterval(() => {
        if (index < characters.length) {
            // Append the character or space
            welcomeMessage.innerText += characters[index] === ' ' ? '\u00A0' : characters[index]; // Using non-breaking space for better rendering
            index++;
        } else {
            clearInterval(interval);
            // Hide the loading screen after a delay
            setTimeout(() => {
                document.querySelector('.loading-screen').classList.add('hidden');
            }, 1000); // Adjust this delay before hiding the loading screen
        }
    }, 50); // Adjust the speed of character appearance (150 ms)
}

// Show the loading screen and start the character animation
window.onload = function () {
    showMessage();
};







// Disable the submit button initially
const submitButton = document.querySelector('.submit-btn');
submitButton.disabled = true;

// Enable the submit button when all fields are filled
document.getElementById('contact-form').addEventListener('input', function() {
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let message = document.getElementById('message').value;

    // Enable the button only if all fields are filled
    if (name && occupation && email && gender && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Form submission event listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    // Form validation
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (!name || !occupation || !email || !gender || !message) {
        alert("Please fill in all fields before submitting.");
        return; // Stop function execution if fields are empty
    }

    // Send the email only if validation passes
    sendmail();
});

function sendmail() {
    let params = {
        name: document.getElementById('name').value,
        occupation: document.getElementById('occupation').value,
        email: document.getElementById('email').value, // User's email
        gender: document.getElementById('gender').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_3bqsann", "template_kpgwfm4", params)
    .then(function(response) {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset(); // Reset the form after successful submission
        submitButton.disabled = true; // Disable the button again
    }, function(error) {
        alert('Failed to send email: ' + error.text);
    });
}






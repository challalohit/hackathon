// Login form submit event
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;

  // Retrieve signup details from localStorage (for demonstration purposes)
  let savedEmail = localStorage.getItem('userEmail');
  let savedPassword = localStorage.getItem('userPassword');

  // Check if login credentials match saved signup details
  if (email === savedEmail && password === savedPassword) {
    alert('Login successful!');
    // Redirect to dashboard.html after successful login
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }

  // Optionally, you can clear the login form fields
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
});

// Example: Retrieve and display user's email in dashboard.html
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve user's email from localStorage (for demonstration purposes)
  let userEmail = localStorage.getItem('userEmail');

  // Select the element where the email will be displayed
  let userEmailElement = document.querySelector('.user-email');

  // Check if userEmailElement exists (to avoid errors if the element isn't found)
  if (userEmailElement) {
    // Display the user's email
    userEmailElement.textContent = userEmail;
  }
});

// JavaScript to toggle the menu on click of the hamburger icon
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementsByClassName('menu')[0].classList.toggle('active');
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
  const userEmailElement = document.getElementById('emailDisplay');

  // Simulating fetching user details from backend (replace with actual AJAX call)
  setTimeout(function() {
    const userEmail = 'user@example.com'; // Replace with actual user email fetched from backend
    userEmailElement.textContent = userEmail;
  }, 1000); // Simulating delay for demonstration purposes

  const editNameBtn = document.getElementById('editNameBtn');
  const saveNameBtn = document.getElementById('saveNameBtn');
  const nameDisplay = document.getElementById('nameDisplay');

  editNameBtn.addEventListener('click', function() {
    const currentName = nameDisplay.textContent.trim();
    const newName = prompt('Enter your new name:', currentName);
    if (newName !== null && newName !== '') {
      nameDisplay.textContent = newName;
      saveNameBtn.style.display = 'inline-block';
    }
  });

  saveNameBtn.addEventListener('click', function() {
    const newName = nameDisplay.textContent.trim();
    // Here you would typically send newName to your server to save it permanently
    alert('Name saved successfully: ' + newName);
    saveNameBtn.style.display = 'none';
  });
});

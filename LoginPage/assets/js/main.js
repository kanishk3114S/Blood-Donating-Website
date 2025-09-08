document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('input-icon');
  const form = document.querySelector('.login__form');
  const messageContainer = document.getElementById('message-container');

  // Function to show a custom message box
  function showMessage(message, type) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box', type);
    messageBox.textContent = message;
    messageContainer.appendChild(messageBox);

    // Remove the message box after 5 seconds
    setTimeout(() => {
      messageBox.remove();
    }, 5000);
  }

  // Toggle password visibility
  if (eyeIcon && passwordInput) {
    eyeIcon.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('ri-eye-off-line');
        eyeIcon.classList.add('ri-eye-line');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('ri-eye-line');
        eyeIcon.classList.add('ri-eye-off-line');
      }
    });
  }

  // --- Core Login Logic ---
  form.addEventListener('submit', (event) => {
    // Prevent the form from submitting normally and reloading the page
    event.preventDefault();

    // Get the values from the input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear any previous messages
    messageContainer.innerHTML = '';

    // Accept any email and password, always redirect
    showMessage('Login successful! Redirecting...', 'success');
    window.location.href = 'main_page.html';
  });
});
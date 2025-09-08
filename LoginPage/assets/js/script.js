document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('registrationForm');
            const messageContainer = document.getElementById('messageContainer');
            const optionsContainer = document.getElementById('optionsContainer');
            const yearSelect = document.getElementById('year');
            const dateSelect = document.getElementById('date');
            const monthSelect = document.getElementById('month');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            
            // Function to dynamically populate the year dropdown
            function populateYears() {
                const currentYear = new Date().getFullYear();
                for (let i = currentYear; i >= currentYear - 100; i--) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    yearSelect.appendChild(option);
                }
            }

            // Function to dynamically populate the date dropdown based on month and year
            function populateDates() {
                const month = monthSelect.value;
                const year = yearSelect.value;
                // Clear existing options, except the disabled placeholder
                dateSelect.innerHTML = '<option value="" disabled selected>Date</option>';
                if (!month || !year) return;

                const daysInMonth = new Date(year, month, 0).getDate();
                for (let i = 1; i <= daysInMonth; i++) {
                    const option = document.createElement('option');
                    option.value = i < 10 ? '0' + i : i;
                    option.textContent = i < 10 ? '0' + i : i;
                    dateSelect.appendChild(option);
                }
            }

            // Populate the dropdowns on page load
            populateYears();
            // Call populateDates initially to fill the dropdown with default values
            populateDates();

            // Event listeners to update dates when month or year changes
            monthSelect.addEventListener('change', populateDates);
            yearSelect.addEventListener('change', populateDates);

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                // Clear previous messages
                messageContainer.innerHTML = '';
                
                // Use a more modern and built-in browser validation method
                if (!form.reportValidity()) {
                    showMessage('Please fill out all the required fields.', 'error');
                    return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }

                const phoneRegex = /^[0-9]{10}$/;
                if (!phoneRegex.test(phoneInput.value)) {
                    showMessage('Please enter a valid 10-digit phone number.', 'error');
                    return;
                }
                
                // Form is valid, proceed
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => (data[key] = value));
                console.log('Form submitted with data:', data);

                showMessage('Thank you for registering! Please choose your role.', 'success');
                
                // Hide the form with a smooth transition
                form.style.display = 'none';
                
                // Show the options with a smooth transition
                optionsContainer.style.display = 'flex';
                // Use a slight delay to allow the `display` change to take effect before the opacity transition
                setTimeout(() => {
                    optionsContainer.style.opacity = '1';
                }, 10);
                
                optionsContainer.innerHTML = '';

                // Create and append the "Receiver" and "Donor" buttons
                const receiverButton = document.createElement('button');
                receiverButton.textContent = 'Receiver';
                receiverButton.classList.add('option-button');
                // Use a data attribute to store the role, which is a good practice
                receiverButton.dataset.role = 'receiver';
                optionsContainer.appendChild(receiverButton);

                const donorButton = document.createElement('button');
                donorButton.textContent = 'Donor';
                donorButton.classList.add('option-button');
                donorButton.dataset.role = 'donor';
                optionsContainer.appendChild(donorButton);
                
                // Use a single event listener on the container for better performance and maintainability
                optionsContainer.addEventListener('click', (event) => {
                    const button = event.target;
                    const role = button.dataset.role;
                    if (role) {
                        console.log(`User chose: ${role}`);
                        window.location.href = `${role}.html`;
                    }
                });
            });

            function showMessage(message, type) {
                const messageBox = document.createElement('div');
                messageBox.classList.add('message-box');
                if (type === 'error') {
                    messageBox.classList.add('error');
                }
                messageBox.textContent = message;
                messageContainer.appendChild(messageBox);

                setTimeout(() => {
                    messageBox.remove();
                }, 5000);
            }
        });

document.addEventListener("DOMContentLoaded", function() {
        var loginForm = document.querySelector("form");

        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();


            var fullName = document.getElementById("fullname").value.trim();
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var address = document.getElementById("address").value.trim();
            var password = document.getElementById("password").value.trim();



            clearErrorMessages();


            var isValid = true;

            if (fullName === "") {
                 isValid = false;
                showError("fullname-error", "Please enter your full name.");
            }

            if (email === "") {
                isValid = false;
                showError("email-error", "Please enter your email address.");
            } else if (!isValidEmail(email)) {
                isValid = false;
                showError("email-error", "Please enter a valid email address.");
            }

            if (phone === "") {
                isValid = false;
                showError("phone-error", "Please enter your phone number.");
            }

            if (address === "") {
                isValid = false;
                showError("address-error", "Please enter your address.");
            }

            if (password === "") {
                isValid = false;
                showError("password-error", "Please enter a password.");
            } else if (!isValidPassword(password)) {
                isValid = false;
                showError("password-error", "Please enter a password between 8 to 12 characters with no spaces and containing symbols.try (peter*123)");
            }

            if (isValid) {
                saveToLocalStorage(fullName, email, phone, address);
                window.location.href = "../profile-page2/profile.html";
            }
        });

        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidPassword(password) {
            var passwordRegex = /^(?=.*[!@#$%^&*])(?!.*\s).{8,12}$/;
            return passwordRegex.test(password);
        }

        function showError(elementId, message) {
            var errorElement = document.querySelector("." + elementId);
            errorElement.textContent = message;
        }

        function clearErrorMessages() {
            var errorElements = document.querySelectorAll(".fullname-error, .email-error, .phone-error, .address-error, .password-error");
            errorElements.forEach(function(element) {
                element.textContent = "";
            });
        }

        function saveToLocalStorage(fullName, email, phone, address) {
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("address", address);
        }
    });

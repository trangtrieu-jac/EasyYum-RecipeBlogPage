'use strict';

// CASE 5: FORM VALIDATION AND ERROR HANDLING
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  
  // Add event listener for form submit
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission if validation fails
    
    // validate first name
    const firstName = document.getElementById("firstName");
    const nameError = document.getElementById("nameError");
    const namePattern = /^[a-zA-Z ]+$/;
    if (firstName.value === "" || !firstName.value.match(namePattern)) {
      nameError.textContent = "Please enter a valid name.";
    } else {
      nameError.textContent = ""; 
    }

    // validate surname
    const surName = document.getElementById("surname");
    const surNameError = document.getElementById("surnameError");
    const surnamePattern = /^[a-zA-Z ]+$/;
    if (surName.value === "" || !surName.value.match(surnamePattern)) {
      surNameError.textContent = "Please enter a valid surname.";
    } else {
      surNameError.textContent = ""; 
    }

    // validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value === "" || !email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = ""; 
    }

    // validate message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value === "") {
      messageError.textContent = "Please enter a message.";
    } else {
      messageError.textContent = ""; 
    }

    // if validation is successful, display success message and clear form
    const successMessage = document.getElementById('successMessage');
    if (firstName.value && surName.value && email.value && message.value && 
        !nameError.textContent && !surNameError.textContent && !emailError.textContent && !messageError.textContent) {
      successMessage.textContent = "Form submitted successfully!";
      form.reset(); // reset the form if successful
    } else {
      successMessage.textContent = ''; 
    }
  });
});

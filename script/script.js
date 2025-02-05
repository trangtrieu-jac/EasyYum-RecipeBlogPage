// Get the current page URL
let currentPage = window.location.pathname;

// Select all nav-links
let navLinks = document.querySelectorAll('.nav-link');

// Loop through all nav-links and add 'active' to the one that matches the current page
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

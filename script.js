// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Get target section from data attribute
    const targetSection = this.getAttribute('data-target');

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active'); // Remove active class
    });

    // Show the target section
    document.getElementById(targetSection).classList.add('active'); // Add active class
  });
});

// Show 'Home' section by default
document.getElementById('home').classList.add('active');

  
// Select the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add background
  } else {
    navbar.classList.remove('scrolled'); // Remove background
  }
});

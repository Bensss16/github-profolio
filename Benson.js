document.addEventListener('DOMContentLoaded', () => {
  // Inject current year into footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
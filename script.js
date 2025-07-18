// Animated section transitions
const sections = document.querySelectorAll('main section');
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const DARK_MODE_KEY = 'portfolioDarkMode';

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
  }
  localStorage.setItem(DARK_MODE_KEY, enabled ? '1' : '0');
}

darkModeToggle.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('dark-mode'));
});

// On load, set dark mode from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem(DARK_MODE_KEY) === '1';
  setDarkMode(dark);
});

// Contact form feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Sending...';
    setTimeout(() => {
      formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
      contactForm.reset();
    }, 1200);
  });
} 
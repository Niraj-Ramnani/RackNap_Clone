/**
 * RackNap Clone - Main Application Script
 * Handles navigation toggling and interactive UI behaviors
 */

function initApp() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// Initialize when components are loaded
document.addEventListener('componentsLoaded', initApp);

// Fallback initialization if DOM elements are already present
if (document.readyState !== 'loading') {
  if (document.getElementById('navToggle')) {
    initApp();
  }
} else {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('navToggle')) {
      initApp();
    }
  });
}

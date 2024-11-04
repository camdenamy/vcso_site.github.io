// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 60; // Adjust offset height in pixels
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle Menu for Small Screens
  function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuIcon = document.querySelector('.menu-icon');
  
    // Toggle menu overlay visibility
    menuOverlay.style.height = menuOverlay.style.height === '100vh' ? '0' : '100vh';
  
    // Toggle menu icon between hamburger and X
    menuIcon.textContent = menuOverlay.style.height === '100vh' ? '✕' : '☰';
  }
  
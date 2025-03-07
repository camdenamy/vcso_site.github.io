// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 80; // Adjust this value to the height of your header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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

  function applyNow() {
    // Redirect to the application page or perform another action
    window.location.href = "apply.html"; // Replace with the actual application link
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".video-thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video");
            const videoElement = document.createElement("video");

            videoElement.setAttribute("width", "400");
            videoElement.setAttribute("height", "300");
            videoElement.setAttribute("controls", "true");
            videoElement.setAttribute("autoplay", "true");

            const sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", videoSrc);
            sourceElement.setAttribute("type", "video/mp4");

            videoElement.appendChild(sourceElement);

            this.parentNode.replaceChild(videoElement, this);
        });
    });
});
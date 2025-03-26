// Author: Ethan Bowles
// Date: March 7, 2025 
// Version: 1.4 (Refactored)

(function () {
    'use strict';
  
    // Cache DOM elements
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.page');
  
    // Function to clear active class from all sections
    const clearActiveSections = () => {
      sections.forEach(section => section.classList.remove('active'));
    };
  
    // Navigation link click event
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        clearActiveSections();
        const targetSelector = link.getAttribute('href');
        const targetSection = document.querySelector(targetSelector);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  
    // Logo click event to navigate home
    const logoHome = document.getElementById('logo');
    logoHome.addEventListener('click', (event) => {
      event.preventDefault();
      clearActiveSections();
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        homeSection.classList.add('active');
      }
    });
  
    // Set starting screen (Home)
    const homeSection = document.querySelector('#home');
    homeSection && homeSection.classList.add('active');
  
    // Image Carousel
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
      const images = carousel.querySelectorAll('img');
      let currentImg = 0;
      setInterval(() => {
        images[currentImg].classList.remove('active');
        currentImg = (currentImg + 1) % images.length;
        images[currentImg].classList.add('active');
      }, 5000);
    }
  
    // Email sending functionality using EmailJS
    window.sendEmail = () => {
      const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
      };
  
      const serviceID = "service_pscwnxf";
      const templateID = "template_xme9zye";
  
      emailjs.send(serviceID, templateID, params)
        .then(() => {
          // Reset form fields on success
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('phone').value = "";
          document.getElementById('address').value = "";
          document.getElementById('service').value = "";
          document.getElementById('message').value = "";
        })
        .catch(err => console.error('Error sending email:', err));
    };
  
  })();
  
// Lenka Lorien — Website JavaScript

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handling (for Netlify Forms or custom endpoint)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Option 1: Netlify Forms (if you add name="contact" and netlify attribute to form)
    // This will auto-submit to Netlify
    // If not using Netlify, uncomment below for custom handling:

    /*
    fetch('https://your-api-endpoint.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
      alert('Thanks for reaching out! I\'ll be in touch soon.');
      contactForm.reset();
    })
    .catch(err => {
      alert('Something went wrong. Please try again or email directly.');
      console.error(err);
    });
    */

    // For Netlify: just submit normally
    this.submit();
  });
}

// Google Analytics (optional)
// Uncomment and replace YOUR_GA_ID with your actual Google Analytics ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_GA_ID');
*/

// Load and render articles dynamically (optional enhancement)
async function loadArticles() {
  try {
    const res = await fetch('data/articles.json');
    const articles = await res.json();
    console.log('Articles loaded:', articles.length);
    // You can use this data to dynamically populate blog.html
  } catch (e) {
    console.log('No articles file or error loading:', e.message);
  }
}

// Detect active nav link based on current page
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  loadArticles();
});

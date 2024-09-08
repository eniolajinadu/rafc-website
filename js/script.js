document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('theme-toggle-checkbox');
  const body = document.body;

  // Check for saved theme preference or default to light mode
  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.checked = true;
  }

  // Theme toggle switch handler
  themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('theme', 'light');
      }
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

// Add this code to the existing script.js file

document.addEventListener('DOMContentLoaded', (event) => {
  // Existing code...

  // Shop page functionality
  const addToCartButtons = document.querySelectorAll('.btn-primary');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          const product = e.target.closest('.card');
          const productName = product.querySelector('.card-title').textContent;
          alert(`Added ${productName} to your cart!`);
          // Here you would typically update the cart state and UI
      });
  });

  // Category filter functionality
  const categoryLinks = document.querySelectorAll('.list-group-item');
  categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          categoryLinks.forEach(l => l.classList.remove('active'));
          e.target.classList.add('active');
          // Here you would typically filter the products based on the selected category
          alert(`Filtered by ${e.target.textContent}`);
      });
  });
});
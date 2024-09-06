const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');

themeToggleCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
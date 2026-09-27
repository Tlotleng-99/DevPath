document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const body = document.body;
  const key = 'devpath-theme';
  const savedTheme = localStorage.getItem(key);

  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }

  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-theme');
      localStorage.setItem(key, isDark ? 'dark' : 'light');
    });
  }
});

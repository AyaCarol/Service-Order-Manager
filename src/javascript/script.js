window.addEventListener('DOMContentLoaded', () => {
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById('sidebar-container');
      container.innerHTML = html;

      // Adiciona o CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/sidebar.css';
      document.head.appendChild(link);

      // Pega a página atual
      const currentPage = window.location.pathname.split("/").pop();
      const sideItems = container.querySelectorAll('.side-item');

      sideItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === currentPage) {
          item.classList.add('active');
        }
      });
    });
});

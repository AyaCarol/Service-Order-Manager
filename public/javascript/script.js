window.addEventListener('DOMContentLoaded', () => {
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById('sidebar-container');
      container.innerHTML = html;

      // Adiciona o CSS da sidebar
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/sidebar.css';
      document.head.appendChild(link);

      // Destaque o link ativo
      const currentPage = window.location.pathname.split("/").pop(); // ex: 'usuarios.html'
      const links = container.querySelectorAll('a');

      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    });
});



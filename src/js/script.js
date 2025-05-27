document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');

  const checkFooterVisibility = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Se chegou ao final da rolagem ou não há rolagem suficiente
    if (scrollPosition >= pageHeight - 10 || window.innerHeight >= pageHeight) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  };

  // Verifica ao rolar
  window.addEventListener('scroll', checkFooterVisibility);

  // Verifica ao carregar a página
  checkFooterVisibility();
});
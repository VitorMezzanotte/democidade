// script.js

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
});

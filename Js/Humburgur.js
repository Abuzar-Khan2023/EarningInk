document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle');
  const navMenu = document.getElementById('show-menu');

  toggle.addEventListener('change', function () {
      navMenu.classList.toggle('active');
  });
});
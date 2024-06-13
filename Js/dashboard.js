document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const modeToggle = body.querySelector(".toggle-switch");
  const sidebar = body.querySelector(".sidebar");
  const toggleSidebar = body.querySelector(".toggle-sidebar");

  modeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
  });

  toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("close");
  });

  toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
  });

  moon.addEventListener('click', () => {
      document.body.classList.add('dark');
  });

  sun.addEventListener('click', () => {
      document.body.classList.remove('dark');
  });
});

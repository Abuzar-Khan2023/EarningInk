document.addEventListener("DOMContentLoaded", function() {
  const inputBurger = document.getElementById("toggle");
  const navigation = document.getElementById("show-menu");
  const menuBtn = document.querySelector(".menuBtn");
  const closeBtn = document.querySelector(".closeBtn");

  inputBurger.addEventListener("change", function() {
      if (inputBurger.checked) {
          navigation.style.display = "flex";
          menuBtn.style.display = "none";
          closeBtn.style.display = "inline-block";
      } else {
          navigation.style.display = "none";
          closeBtn.style.display = "none";
          menuBtn.style.display = "inline-block";
      }
  });
});

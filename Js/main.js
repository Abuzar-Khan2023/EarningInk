var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector("navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleReadMore(button) {
  var content = button.previousElementSibling; // Get the content div
  if (content.style.maxHeight) {
    content.style.maxHeight = null; // If expanded, collapse
    button.innerHTML = "Read more...";
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // If collapsed, expand
    button.innerHTML = "Read less";
  }
}
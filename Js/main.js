const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector("navigation");
const hamburgerBtn = document.querySelector(".hamburger-btn");

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

document.querySelector('.nav-menu-btn').addEventListener('click', function () {
  document.querySelector('.navigation').style.display = 'flex';
});

document.querySelector('.nav-close-btn').addEventListener('click', function () {
  document.querySelector('.navigation').style.display = 'none';
});
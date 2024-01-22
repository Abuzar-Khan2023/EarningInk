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

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // You can add your custom logic here, such as form validation or submitting the form data.
  // For simplicity, let's just log the form data to the console.
  const formData = new FormData(event.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  console.log(formObject);

  // You can replace the console.log above with your own logic to handle the form data.
});

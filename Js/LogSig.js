let login = document.querySelector('.login');
let create = document.querySelector('.create') ;
let container = document.querySelector('.container');

login.onclick = function() {
    container.classList.add('signinForm');
};

create.onclick = function() {
    container.classList.remove('signinForm');
};

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector("#LoginForm.signup");
  const signInForm = document.querySelector("#LoginForm.signin");

  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // TODO: Add your Firebase authentication or data storage logic here

    // Assuming successful submission, clear the input fields
    clearForm(signUpForm);
  });

  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // TODO: Add your Firebase authentication or data retrieval logic here

    // Assuming successful login, clear the input fields
    clearForm(signInForm);
  });

  function clearForm(form) {
    const inputFields = form.querySelectorAll("input[type=text], input[type=email], input[type=password]");

    // Animate the removal of data (you can customize this animation)
    inputFields.forEach((input) => {
      input.classList.add("animated", "fadeOut");
    });

    // Clear the input fields after a short delay (adjust timing as needed)
    setTimeout(() => {
      inputFields.forEach((input) => {
        input.value = "";
        input.classList.remove("animated", "fadeOut");
      });
    }, 500); // 500 milliseconds delay, adjust as needed
  }
});

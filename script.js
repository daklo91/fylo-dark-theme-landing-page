const signUpForm = document.querySelector("#sign-up-form");
const signUpEmail = document.querySelector("#sign-up-email");
const signUpError = document.querySelector("#sign-up-error");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!signUpEmail.validity.valid) {
    signUpError.classList.add("show-error");
    signUpEmail.setAttribute("aria-invalid", "true");
    return;
  }

  signUpError.classList.remove("show-error");
  signUpEmail.setAttribute("aria-invalid", "false");

  alert(`Congratulations ${signUpEmail.value}, you are now signed up!`);

  signUpForm.reset();
});

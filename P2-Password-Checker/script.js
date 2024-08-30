let inp = document.querySelector("#password");
let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");

let password;

btn.addEventListener("click", function () {
  password = inp.value;

  if (!password) {
    h2.textContent = "Please enter the Password!!";
    h2.style.color = "red";
  } else {
    h2.textContent = "";

    if (password.length < 8) {
      h2.textContent = "Password is too short";
      h2.style.color = "red";
    } else if (password.search(/[a-z]/) == -1) {
      h2.textContent = "Password is missing small case";
      h2.style.color = "red";
    } else if (password.search(/[A-Z]/) == -1) {
      h2.textContent = "Password is missing captial case";
      h2.style.color = "red";
    } else if (
      password.search(
        /[!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\:\;\"\'\<\>\,\.\?\/\\\|]/
      ) == -1
    ) {
      h2.textContent = "Password is missing special character";
      h2.style.color = "red";
    } else {
      h2.textContent = "Password is Strong";
      h2.style.color = "green";
    }
  }
});

let inp = document.querySelector("#password");
let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");

let password;

inp.addEventListener("input", function () {
  password = inp.value;
});

let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let img = document.querySelector("img");

let inputValue;

btn.addEventListener("click", function () {
  inputValue = inp.value;
  console.log(inputValue);

  if (inp.value === "") {
    alert("Please first fill the input box");
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputValue}`;

    img.alt = `QR Code for ${inputValue}`;
    console.log(img.alt);
  }
});

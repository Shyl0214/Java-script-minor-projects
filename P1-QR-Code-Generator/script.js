let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let img = document.querySelector("img");
let h4 = document.querySelector("h4");

let inpValue;

btn.addEventListener("click", function () {
  inpValue = inp.value;
  //   console.log(inpValue);

  if (inpValue === "") {
    alert("Please fill the input field");
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inpValue}`;

    img.alt = `QR code for the link is ${inpValue}`;

    h4.textContent = "Your Qr-code is ready";
    h4.style.marginTop = "5px";
  }
});

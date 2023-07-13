const otpContainer = document.getElementById("otp-container")
const inputs = document.querySelectorAll(".input")

inputs[0].focus()

otpContainer.addEventListener("input", (e) => {
    const target = e.target
    const value = target.value

    if(value === " " || isNaN(value)){
        target.value = ""
        return
    }

    if (target.nextElementSibling) {
        target.nextElementSibling.focus()
    }
})

otpContainer.addEventListener("keydown", (e) => {
    const target = e.target
    const value = target.value
    const key = e.key.toLocaleLowerCase()

    if (key === "backspace") {
        e.preventDefault();
        target.value = "";
        if (target.previousElementSibling) {
            target.previousElementSibling.focus();
        }
    } else {
        if (target.value && target.nextElementSibling) {
            target.nextElementSibling.focus();
        }
    }
})

// const form = document.querySelector("#otp-form");
// const inputs = document.querySelectorAll(".otp-input");

// form.addEventListener("input", (e) => {
//   const target = e.target;
//   const value = target.value;
//   console.log({ target, value });
//   if (target.nextElementSibling) {
//     target.nextElementSibling.focus();
//   }
// });

// inputs.forEach((input, currentIndex) => {
//   // backspace event
//   input.addEventListener("keydown", (e) => {
//     if (e.keyCode === 8) {
//       e.preventDefault();
//       input.value = "";
//       if (input.previousElementSibling) {
//         input.previousElementSibling.focus();
//       }
//     } else {
//       if (input.value && input.nextElementSibling) {
//         input.nextElementSibling.focus();
//       }
//     }
//   });
// });


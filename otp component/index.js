const otpContainer = document.getElementById("otp-container")
const inputs = document.querySelectorAll(".input")

inputs[0].focus()

const check = (str) => {
    return /^[a-zA-Z0-9]$/.test(str);
}

otpContainer.addEventListener("input", (e) => {
    const target = e.target
    const value = target.value

    if (value === " " || !check(value)) {
        target.value = ""
        return
    }

    if (target.nextElementSibling) {
        target.nextElementSibling.focus()
    }
})

otpContainer.addEventListener("click", (e) => {
    for (const input of inputs) {
        if (input.value == "") {
            input.focus()
            break
        }
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


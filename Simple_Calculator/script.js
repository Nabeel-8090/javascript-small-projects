// Created by Sheikh Nabeel

const input = document.querySelector(".panel");
const buttons = document.querySelectorAll(".button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.value;
        if(val === 'AC') {
            input.value = "";
        } else if(val === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else if(val === '=') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += val;
        }
    });
});



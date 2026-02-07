// Created by Sheikh Nabeel

const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let counter = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.value === '+') {
            counter++;
            input.value = counter;
        } else if (btn.value === '-') {
            counter--;
            input.value = counter;
        } else {
            counter = 0;
            input.value = counter;
        }
    });
});
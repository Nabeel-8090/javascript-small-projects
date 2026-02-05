// Created by Sheikh Nabeel

const main_list = document.querySelector(".to-do-list");
const input = document.querySelector(".input-box");
const add_btn = document.querySelector(".add-btn");

let tasks = [];

function addTask() {
    if(input.value !== "") {
        tasks.push(input.value);

        const newDiv = document.createElement("div");
        const output = document.createElement("input");
        output.value = input.value;
        output.className = "output-box";
        output.readOnly = true;

        const del_btn = document.createElement("button");
        del_btn.textContent = "Delete";
        del_btn.className = "dlt-btn";

        del_btn.addEventListener("click", () => {
            tasks = tasks.filter(item => item != output.value);
            newDiv.remove();
        });
        newDiv.appendChild(output);
        newDiv.appendChild(del_btn);
        main_list.appendChild(newDiv);
        input.value = "";
    } else {
        alert("Please type something!");
    }
}

add_btn.addEventListener("click", () => {
   addTask(); 
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTask();
    }
});


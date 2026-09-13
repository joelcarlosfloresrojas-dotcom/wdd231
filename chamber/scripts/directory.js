document.getElementById("currentyear").textContent = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;

const button = document.getElementById("menu-toggle");
const display=document.querySelector("nav");
button.addEventListener("click", () => {
    button.classList.toggle("open");
    display.classList.toggle("display");
});
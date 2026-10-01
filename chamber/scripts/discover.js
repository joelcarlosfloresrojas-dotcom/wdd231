document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const selector1 = document.getElementById("selector1");
const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", () => {
    selector1.style.background = "#e6f0fa";
    selector1.style.color = "#004499";
});

button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    display.classList.toggle("display");
});
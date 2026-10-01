import {locations} from '../data/discover.mjs'
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const selector1 = document.getElementById("selector1");
const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");
const secter= document.getElementById('secter');
document.addEventListener("DOMContentLoaded", () => {
    selector1.style.background = "#e6f0fa";
    selector1.style.color = "#004499";
});

button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    display.classList.toggle("display");
});

locations.forEach((location)=>{
    const div =document.createElement('div');
    div.innerHTML="";
    div.innerHTML=`<h2><strong>${location.name}</strong></h2>}
    <img src="${location.image_url}" alt="${location.name}">
    <p><strong>Address:</strong>${location.address}</p>
    <p><${location.description}</p>
    `;
    secter.appendChild(div);
});


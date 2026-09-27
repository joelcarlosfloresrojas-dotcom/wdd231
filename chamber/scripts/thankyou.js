document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");

button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    display.classList.toggle("display");
});



const getString = window.location.search;
const para= new URLSearchParams(getString);
const thank = document.getElementById('thank');
const rawDate = para.get('timestamp');
const neatDate = rawDate ? new Date(rawDate).toLocaleString() : 'N/A';

function DisplayInfo(){
    thank.innerHTML ="";
    thank.innerHTML= `
    <p><strong>Name: </strong>${para.get('name')}</p>
    <p><strong>Last Name: </strong>${para.get('lname')}</p>
    <p><strong>Email: </strong>${para.get('email')}</p>
    <p><strong>Phone Number: </strong>${para.get('phone')}</p>
    <p><strong>Business's name: </strong>${para.get('business')}</p>
    <p><strong>Form Submitted On: </strong>${neatDate}</p>
`;
}

document.addEventListener("DOMContentLoaded", () => {
    DisplayInfo();
});


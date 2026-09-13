document.getElementById("currentyear").textContent = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;

const button = document.getElementById("menu-toggle");
const display=document.querySelector("nav");
button.addEventListener("click", () => {
    button.classList.toggle("open");
    display.classList.toggle("display");
});

const url="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/chamber/data/member.json";
const cards=document.getElementById("lets-cook");


async function GetInfo() {
    const info= await fetch(url);
    const infojs= await info.json();
    displayInfo(infojs.members);
}

const displayInfo = (members) =>{
        cards.innerHTML=""
    members.forEach((member) => {
        let subcard=document.createElement("div");
        subcard.innerHTML = `
            <h2>${member.name}</h2>
            <h3>${member.additional}</h3>
            <img src="${member.image}" alt="${member.name} logo">
            <ul class="contact-info">
                <li><strong>EMAIL:</strong> <a href="mailto:${member.email}">${member.email}</a></li>
                <li><strong>PHONE:</strong> <a href="tel:${member.phone}">${member.phone}</a></li>
                <li><strong>URL:</strong> <a href="${member.URL}" target="_blank">${member.URL}</a></li>
            </ul>    
        `;
    cards.appendChild(subcard);
    });
}

GetInfo();
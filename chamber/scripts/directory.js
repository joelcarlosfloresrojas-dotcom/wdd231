
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    display.classList.toggle("display");
});

const url = "https://joelcarlosfloresrojas-dotcom.github.io/wdd231/data/member.json";
const cards = document.getElementById("lets-cook");
const gridbttn = document.getElementById("grid");
const listbttn = document.getElementById("list");

gridbttn.addEventListener("click", () => {
    cards.classList.add("grider");
    cards.classList.remove("lister");
    
    gridbttn.classList.add("active-view");
    listbttn.classList.remove("active-view");
});

listbttn.addEventListener("click", () => {
    cards.classList.add("lister");
    cards.classList.remove("grider");
    
    listbttn.classList.add("active-view");
    gridbttn.classList.remove("active-view");
});

async function GetInfo() {
    try {
        const info = await fetch(url);
        if (info.ok) {
            const infojs = await info.json();
            displayInfo(infojs.members);
        } else {
            console.error("Failed to fetch data");
            cards.innerHTML = "<p>Sorry, we couldn't load the directory at this time.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayInfo = (members) => {
    cards.innerHTML = ""; 
    
    members.forEach((member) => {
        let subcard = document.createElement("div");
        subcard.classList.add("member-card");
        subcard.innerHTML = `
            <div class="looking">
                <h2>${member.name}</h2>
                <h3>${member.additional}</h3>
            </div>
            <div class="looking2">
                <img src="${member.image}" alt="${member.name} logo" id="imagen" loading="lazy">
                <ul class="contact-info">
                    <li><strong>EMAIL:</strong> <a href="mailto:${member.email}">${member.email}</a></li>
                    <li><strong>PHONE:</strong> <a href="tel:${member.phone}">${member.phone}</a></li>
                    <li><strong>URL:</strong> <a href="${member.URL}" target="_blank">${member.URL}</a></li>
                </ul>    
            </div>
        `;
        cards.appendChild(subcard);
    });
}

GetInfo();
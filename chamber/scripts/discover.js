import {locations} from '../data/discover.mjs'
const time = document.getElementById('time');
const last =localStorage.getItem("lastVisitTimestamp");
const now = Date.now();
const day = 24 * 60 * 60 * 1000;
const noname=document.getElementById('noname');
if(!last){
    time.innerHTML="Welcome! Let us know if you have any questions.";
}else{
    const difference=now-parseInt(last, 10);
    const days=Math.floor(difference/day);
    if(difference<day){
        time.innerHTML="Back so soon! Awesome!";
    }
    else if(days==1){
         time.innerHTML=`You last visited 1 day ago.`;
    }
    else{
        
        time.innerHTML=`You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisitTimestamp", now);

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
    div.classList.add("member");
    div.innerHTML="";
    div.innerHTML=`<h2><strong>${location.name}</strong></h2>
    <img src="${location.image_url}" alt="${location.name}" loading="lazy">
    <p>${location.description}</p>
    <h5>${location.address}</h5>
    <button id="${location.name}">Learn More</button>
    `;
    secter.appendChild(div);
    
});

locations.forEach((locater)=>{
    const boton =document.getElementById(locater.name);
    
 boton.addEventListener('click',()=>{
    noname.innerHTML="";
    noname.innerHTML=`
    <button id="closeModa">❌</button>
    <h3>More info</h3>
    <p>${locater.more}</p>
    `;

    noname.showModal();
    const close = document.getElementById('closeModa');
    close.addEventListener('click', () => {
        noname.close();
    });

    });
});


    


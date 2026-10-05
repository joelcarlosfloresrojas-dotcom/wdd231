import {buttonClick,initHeader} from './header.mjs';
import { catalog,prices,changer} from './shop.mjs';
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const btn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
buttonClick(btn, nav);

const head =document.getElementById("home");
initHeader(head); 


const box =document.getElementById('info');
changer(box);
const selector =document.getElementById('filter');
document.addEventListener('DOMContentLoaded',()=>{
    catalog(box);
    prices(selector,box);

});
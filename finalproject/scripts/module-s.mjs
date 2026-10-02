import {buttonClick,initHeader} from './header.mjs';
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const btn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
buttonClick(btn, nav);

const head =document.getElementById("home");
initHeader(head); 
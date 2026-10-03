import {buttonClick,initHeader} from './header.mjs';
import {catalog1} from './shop.mjs';
import { products1 } from './contact.mjs';
import { products4,delivery } from './balance.mjs';
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const btn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
buttonClick(btn, nav);

const head =document.getElementById("home");
initHeader(head); 

const helperArray = await catalog1();
products1(helperArray);

let total = 0;

products4(helperArray,total);
delivery();
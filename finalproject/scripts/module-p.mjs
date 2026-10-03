import {buttonClick,initHeader} from './header.mjs';
import { products } from './products.mjs';
import { catalog1 } from './shop.mjs';

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const btn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
buttonClick(btn, nav);

const head =document.getElementById("home");
initHeader(head); 
const data = await catalog1();
products(data);

const btno =document.getElementById('travel');
const crazy =document.getElementById('loco');
const close=document.getElementById('closeModal');
function stop(){
btno.addEventListener('click',()=>{
    crazy.showModal();

});
close.addEventListener('click',()=>{
    crazy.close();

});
}
stop();
const dont =document.querySelector('section');
const awa =document.getElementById('ewe');


 if(dont.children.length===0){
        awa.style.display='none';
    }
    else{
        awa.style.display='block';
    }





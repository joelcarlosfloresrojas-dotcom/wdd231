document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const selector=document.getElementById('join');
const details = document.getElementById('details');
const inputO = document.querySelector('[name="title"]');
const error = document.getElementById('error');
const titleRegex = /^[A-Za-z\-\s]{7,}$/;
const form = document.getElementById("Form");
const NP =document.getElementById('NP');
const Bron = document.getElementById('Bron');
const Sil = document.getElementById('Sil');
const Gold = document.getElementById('Gold');

const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");

button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    display.classList.toggle("display");
});

document.addEventListener("DOMContentLoaded", () => {
    selector.style.background = "#e6f0fa";
    selector.style.color = "#004499";
});

function sure(hello){
    error.innerHTML="";
    const tester = titleRegex.test(inputO.value)
    if(tester==false){
        error.textContent="Title must be at least 7 characters (letters, spaces, hyphens only).";
        hello.preventDefault();
    }
    else{
        const loadTime = new Date().toISOString();   
        document.getElementById('timestamp').value = loadTime;
    }

}
const loadTime = new Date().toISOString();   
document.getElementById('timestamp').value = loadTime;
form.addEventListener("submit",function(event){
        sure(event);
});
    


NP.addEventListener('click',()=>{
    
    details.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Non-Profit Membership</h2>
    <h3>Benefits</h3>
    <ul>
    <li>- Access to the private community networking forum.</li>
    <li>- Free monthly educational webinars and resources.</li>
    <li>- Inclusion in our public non-profit member directory.</li>
    </ul>
    <p><strong>Cost: </strong>Free</p>
`;

details.showModal();
    const close =document.getElementById('closeModal');
    close.addEventListener('click',() =>{
        
        details.close();
    
    });
});
   
Bron.addEventListener('click', () => {
    details.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Bronze Membership</h2>
    <h3>Benefits</h3>
    <ul>
    <li>- All Non-Profit benefits.</li>
    <li>- 10% discount on Chamber of Commerce training and events.</li>
    <li>- Basic business listing in the annual member directory.</li>
    <li>- Access to the quarterly business mixer.</li>
    <li>- Free booth at the local community fair.</li>
    </ul>
    <p><strong>Cost: </strong>$50/year</p>
    `;

    details.showModal();
    const close = document.getElementById('closeModal');
    close.addEventListener('click', () => {
        details.close();
    });
});

Sil.addEventListener('click', () => {
    details.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Silver Membership</h2>
    <h3>Benefits</h3>
    <ul>
    <li>- All Bronze benefits.</li>
    <li>- 50% discount on Chamber of Commerce training and events.</li>
    <li>- Advertising opportunities in the monthly digital newsletter.</li>
    <li>- Priority registration for annual networking conferences.</li>
    <li>- Business logo displayed on the Chamber's official homepage.</li>
    </ul>
    <p><strong>Cost: </strong>$100/year</p>
    `;

    details.showModal();
    const close = document.getElementById('closeModal');
    close.addEventListener('click', () => {
        details.close();
    });
});

Gold.addEventListener('click', () => {
    details.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Gold Membership</h2>
    <h3>Benefits</h3>
    <ul>
    <li>- All Silver benefits.</li>
    <li>- Free access to all standard Chamber of Commerce events.</li>
    <li>- VIP premium placement in the directory and homepage spotlight.</li>
    <li>- Exclusive dinner with the Mayor and local government officials.</li>
    <li>- Dedicated account manager for your business.</li>
    </ul>
    <p><strong>Cost: </strong>$250/year</p>
    `;

    details.showModal();
    const close = document.getElementById('closeModal');
    close.addEventListener('click', () => {
        details.close();
    });
});


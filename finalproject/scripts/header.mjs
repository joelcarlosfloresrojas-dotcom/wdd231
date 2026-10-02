export  function buttonClick(button, nav) {
    
    button.addEventListener("click", () => {
        button.classList.toggle("open");
        nav.classList.toggle("show");
    });
}

export function initHeader(head) {
       head.classList.add("active");   
}


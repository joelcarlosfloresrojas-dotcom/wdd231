
export const products =(data)=>data.forEach(product => {
    const yours =document.getElementById('your');
    const hola = document.getElementById('ewe');
    const jso =localStorage.getItem(`${product.id}`);
    if(jso !== null){
        const diva=document.createElement('div');
           diva.innerHTML="";
                diva.classList.add('product-card');
                diva.innerHTML=`
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-content">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-details">
                        <span class="product-price">$${product.price}</span>
                        <span class="product-rating">⭐ ${product.rating}</span>
                    </div>
                    
                    <button  class="remove-btn" data-id="${product.id}">Remove from Cart</button>
                </div>
                `; 
                const botonEliminar = diva.querySelector('.remove-btn');
                botonEliminar.addEventListener('click', () => {
                localStorage.removeItem(`${product.id}`); 
                diva.remove(); 
                const dont =document.querySelector('section');
                const awa =document.getElementById('ewe');
                if(dont.children.length===0){
                    awa.style.display='none';
                }
                else{
                    awa.style.display='block';
                }
        });
            yours.appendChild(diva);
           
    }
    else{
        console.log("Element not found");
       
    }

    
});


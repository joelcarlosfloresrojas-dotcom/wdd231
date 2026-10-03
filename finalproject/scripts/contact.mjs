export const products1 =(data)=>data.forEach(product => {
    const yours3 =document.getElementById('run');
    const jso =localStorage.getItem(`${product.id}`);
    if(jso !== null){
        const diva=document.createElement('div');
                diva.innerHTML="";
                diva.classList.add('product-card');
                diva.innerHTML=`
                <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                    <span class="product-category"><strong>Category:</strong> ${product.category}</span>
                    
                    
                    <div class="product-details">
                        <span class="product-price"><strong>Price: </strong>$${product.price}</span>
                        
                    </div>
                    
                </div>
                `; 

                   yours3.appendChild(diva);
        }
        else{
            console.log("No data");
        }
          
});

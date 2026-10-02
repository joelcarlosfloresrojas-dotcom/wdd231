export async function catalog(box) {
    const url ="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/catalog.json";
    try{
        const info = await fetch(url);
         if(info.ok){
        const object =await info.json();
       
            const data =object.products;
            data.forEach(product => {
                const div1 =document.createElement('div');
                div1.innerHTML="";
                div1.classList.add('product-card');
                div1.innerHTML=`
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-content">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-details">
                        <span class="product-price">$${product.price}</span>
                        <span class="product-rating">⭐ ${product.rating}</span>
                    </div>
                    
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>  
                `;

                box.appendChild(div1);
            });
        }
        else{
            console.log("error");
        }

    }
    catch{
        console.log("There was error loading the file information");
    }
}
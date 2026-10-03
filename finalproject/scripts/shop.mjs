export async function catalog(box) {
   const data4= await catalog1();
   Displayinfo(data4,box);
}





export async function changer(container) {
    //
    const fullArray = await catalog1();
    
    const grid = document.getElementById('grid');
    const list = document.getElementById('list');
    const selectFilter = document.getElementById('filter'); 
    
   
    function ultimate() {
        const choice = selectFilter.value;
        switch(choice) {
            case '50': return fullArray.filter((p) => p.price <= 49.99);
            case '50-100': return fullArray.filter((p) => p.price > 49.99 && p.price <= 99.99);
            case '100-200': return fullArray.filter((p) => p.price > 99.99 && p.price <= 199.99);
            case '+200': return fullArray.filter((p) => p.price > 199.99);
            case 'All' : return fullArray;
            default: return fullArray; 
        }
    }

 
    list.addEventListener('click', () => {
        container.classList.remove('produ');
        container.classList.add('produlist');
        
     
        container.innerHTML = ""; 
        
       
        const DataShow = ultimate();
        DisplayinfoList(DataShow, container); 
    });


    grid.addEventListener('click', () => {

        container.classList.remove('produlist'); 
        container.classList.add('produ');
        
       
        container.innerHTML = "";
        

        const DataShow = ultimate();
        Displayinfo(DataShow, container); 
    });
}
/*-----------------------------------*/

export async function prices(select, box1) {
    const fullArray = await catalog1();
    
    select.addEventListener('change', (choicer) => {
        const choice = choicer.target.value;
        box1.innerHTML = ""; 
        
        let filteredArray = []; 
        
        
        switch(choice) {
            case '50':
                filteredArray = fullArray.filter((product) => product.price <= 49.99);
                break;
            case '50-100':
                filteredArray = fullArray.filter((product) => product.price > 49.99 && product.price <= 99.99);
                break;
            case '100-200':
                filteredArray = fullArray.filter((product) => product.price > 99.99 && product.price <= 199.99);
                break;
            case '+200':
                filteredArray = fullArray.filter((product) => product.price > 199.99);
                break;
            case 'All':
                filteredArray = fullArray
            break;
            default:
                filteredArray = fullArray;
                break;
        }

      
        if (box1.classList.contains('produlist')) {
            DisplayinfoList(filteredArray, box1);
        } else {

            Displayinfo(filteredArray, box1);
        }
    });
}


export async function catalog1() {
    const url ="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/catalog.json";
    try{
        const info = await fetch(url);
         if(info.ok){
        const object =await info.json();
       
            const data =object.products;
            return data;
          
        }
        else{
            console.log("error");
            
        }

    }
    catch{
        console.log("There was error loading the file information");
        return null;
    }
}

 const Displayinfo = (data,box) =>  data.forEach(product => {

                    const close =document.getElementById('closeModal');
                    close.addEventListener('click', () => {
                    dialog.close();
                    });
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
                    
                    <button  class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>  
                `;
                const boton = div1.querySelector('.add-to-cart-btn');
            
                boton.addEventListener('click', () => {
                    
                    localStorage.setItem(`${product.id}`, JSON.stringify(product));
                    const dialog =document.getElementById('dialog');
                    dialog.showModal();

                });
                box.appendChild(div1);
                

            });

            
 const DisplayinfoList = (data,box) =>  data.forEach(product => {
                const close =document.getElementById('closeModal');
                    close.addEventListener('click', () => {
                    dialog.close();
                    });
                
                const div1 =document.createElement('div');
                div1.innerHTML="";
                div1.classList.add('product-card');
                div1.innerHTML=`
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
                const boton = div1.querySelector('.add-to-cart-btn');
            
                boton.addEventListener('click', () => {
                    
                    localStorage.setItem(`${product.id}`, JSON.stringify(product));
                    const dialog =document.getElementById('dialog');
                    dialog.showModal();

                });
                box.appendChild(div1);
            });

 
/*-----------localstorage----------------*/


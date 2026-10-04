
export function products4(data,total){
    const yours5 =document.getElementById('balance');
    data.forEach(product => {
    
    const jso =localStorage.getItem(`${product.id}`);
   
    if(jso !== null){
        total+=product.price;

                   
        }
        else{
            console.log("No data");
        }

    
          
    });

   yours5.textContent=`($${total.toFixed(2)})`;
}
export function delivery(){
const delivery =document.getElementById('delivery');
const newe = document.getElementById('newer');
delivery.addEventListener('change',(value) =>{
        const value1 =value.target.value;

    switch(value1){

        case 'pickup':
                newe.innerHTML="";
                newe.innerHTML=`
                <p>Av. Las Begonias 452, San Isidro, Lima</p>
                `;
        break;

        case 'standard':
            newe.innerHTML="";
                newe.innerHTML=`
                <div class="label">
                    <label for="address">Shipping Address*</label>
                    <input type="text" id="address" name="address" placeholder="123 Main St, Apt 4B" autocomplete="street-address" required>
                </div>
                `;
            

        break;

        case 'express':
            newe.innerHTML="";
                newe.innerHTML=`
                <div class="label">
                    <label for="address">Shipping Address*</label>
                    <input type="text" id="address" name="address" placeholder="123 Main St, Apt 4B" autocomplete="street-address" required>
                </div>
                `;

        break;        
    }

});
}
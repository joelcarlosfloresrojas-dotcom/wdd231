async function catalog() {
    const url ="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/catalog.json";
    try{
        const info = await fetch(url);
        const object =info.json();
        if(object.ok){
            const data =object.products;
            data.forEach(product => {
                const div =document.createElement('div');
                div.innerHTML="";
                div.classList.add('product-card');
                div.innerHTML=`
                
                
                
                
                
                `
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
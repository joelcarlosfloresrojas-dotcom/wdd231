export async function quote(quote){
    const url="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/quotes.json";
    try{
        const ram =await fetch(url)
        if(ram.ok){
            const jeje = await ram.json();
            jeje1=jeje.sort(()=>Math.random()-0.5);
            jeje2=jeje1.slice(0,1);
            quote.textContent=`
            <h3>Quote of the Day</h3>
            <p>${jeje2.name}</p>
            <p><strong>Author</strong>${jeje2.author}</p>
            `;
           
        }
        else{
            console.log("No data found");
        }
    }
    catch(error) {
        console.error("Error fetching data:", error);

    }
}

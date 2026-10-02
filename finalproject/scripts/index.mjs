export async function quote(quote){
    const url="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/quotes.json";
    try{
        const ram =await fetch(url)
        if(ram.ok){
            const jeje = await ram.json();
            const jeje1=jeje.sort(()=>Math.random()-0.5);
            const jeje2=jeje1.slice(0,1);
            quote.innerHTML=`
            <h3>Quote of the Day</h3>
            <p>${jeje2.numbers.quote}</p>
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

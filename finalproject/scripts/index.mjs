export async function getQuote(quote){
    const url="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/finalproject/data/quotes.json";
    try{
        const ram =await fetch(url);
        if(ram.ok){
            const jeje = await ram.json();
            const jeje1=jeje.numbers;
            const jeje2=jeje1.sort(()=> Math.random()-0.5);
            const jeje3=jeje2[0];
            quote.innerHTML=`
            <h3>Quote of the Day</h3>
            <p>${jeje3.quote}</p>
            <p><strong>Author</strong>${jeje3.author}</p>
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

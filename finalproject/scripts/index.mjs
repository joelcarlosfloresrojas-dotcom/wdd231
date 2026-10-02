export async function quote(quote){
    const url="https://dummyjson.com/quotes/random";
    try{
        const ram =await fetch(url)
        if(ram.ok){
            const jeje = await ram.json();
            quote.textContent=`${jeje.}`;
           
        }
        else{
            console.log("No data found");
        }
    }
    catch(error) {
        console.error("Error fetching data:", error);

    }
}

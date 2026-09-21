const url='https://api.openweathermap.org/data/2.5/forecast?lat=-12.037189651090605&lon=-77.06607017486678&appid=22960f9801822a3db8e991bec562fb85&units=imperial';
const sectionw=document.getElementById('weather');
const url2="https://joelcarlosfloresrojas-dotcom.github.io/wdd231/chamber/data/members.json";
const spotlight3 =document.getElementById('spotlight');


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.getElementById("menu-toggle");
const display = document.querySelector("nav");

button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    display.classList.toggle("display");
});

async function weather() {
    try{
        const info = await fetch(url);
        if(info.ok){
            const data = await info.json();
        DisplayWeather(data);
        }else{
            console.error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const DisplayWeather = (weather) =>{
    const threeDays = [weather.list[0], weather.list[8], weather.list[16]];
    threeDays.forEach(weather1 => {
    const div =document.createElement('div');
    div.classList.add('weather-card');
     const temp=weather1.main.temp;
     const description=weather1.weather[0].description;
     const dateObj = new Date(weather1.dt * 1000);
     const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
        });
    const iconCode = weather1.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    div.innerHTML=`<strong>${formattedDate}:</strong>
    <img src="${iconUrl}" alt="weather icon" width="40" height="40">
    <p>${description}</p>
    <p>${temp}°F</p>
    <p>Humidity:${weather1.main.humidity}°%</p>`;
    sectionw.appendChild(div);
    });
    
}
let level = "";
weather();

async function spotlight() {
    try{
        const json1 = await fetch(url2);
        if(json1.ok){
            const js =await json1.json();
            DisplaySpotlight(js.members);
        }
        else{
            console.error("Failed to fetch data");
        }
    }
    catch(error)
    {
        console.error("Error fetching data:", error);
    }
}


const DisplaySpotlight= (data) =>{
    spotlight3.innerHTML = ""; 
    const members1 = data.filter((data1)=> data1.membership===2 || data1.membership===3 );
    const mixed = members1.sort(() => Math.random() - 0.5);
    const mixed1 = mixed.slice(0, 3);
    
    mixed1.forEach((member, index) => {
        let subcard = document.createElement("div");
        subcard.classList.add("member-card");
        if(member.membership==2){
             level="Silver";
        }else{
            level="Gold";
        }
        let lazyLoad = index < 2 ? '' : 'loading="lazy"';
        let priority = index === 0 ? 'fetchpriority="high"' : '';
        
        subcard.innerHTML = `
            <div class="looking">
                <h2>${member.name}</h2>
                <h3>${member.additional}</h3>
            </div>
            <div class="looking2">
                <img src="${member.image}" alt="${member.name} logo" class="imagen" width="90" height="90" ${lazyLoad} ${priority} decoding="async">
                <ul class="contact-info">
                    <li><strong>EMAIL:</strong> <a href="mailto:${member.email}">${member.email}</a></li>
                    <li><strong>PHONE:</strong> <a href="tel:${member.phone}">${member.phone}</a></li>
                    <li><strong>URL:</strong> <a href="${member.URL}" target="_blank">${member.URL}</a></li>
                    <li><strong>MEMBERSHIP LEVEL:</strong> <a href="${level}" target="_blank">${level}</a></li>
                </ul>    
            </div>
        `;
        spotlight3.appendChild(subcard);
    });
}

spotlight();
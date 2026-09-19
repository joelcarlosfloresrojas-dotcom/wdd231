const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.037189651090605&lon=-77.06607017486678&appid=22960f9801822a3db8e991bec562fb85&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      DisplayResults(data);
      
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

const DisplayResults = (weather) =>{
    currentTemp.textContent = `${weather.main.temp}`;
}

apiFetch();
// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');
const temperature = document.querySelector('#temp');
const c_names = document.querySelector('#c-names');


// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;
const filterC = citynames.filter((city) => city.startsWith("C"));
function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		month: "short",
        day: "numeric",
		year: "numeric"
	};

// Question #1
const now = new Date();
today1.innerHTML = now.toLocaleDateString("en-UK", options);

// Question #2
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3
let quantity = document.querySelector('#q').value;
// Question #4
message.textContent="Welcome to our neighborhood!";
// Question #5
temperature.value= `${getCelsius(33).toFixed(1)} °C`;
// Question #6
const divs = document.querySelectorAll('div');
document.querySelector('#divs').textContent = `${divs.length} divs in document.`;
// Question #7
c_names.textContent = filterC.join(", ");

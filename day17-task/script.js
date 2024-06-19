// Define the URLs for the APIs
const restCountriesURL = 'https://restcountries.com/v3.1/all';
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
const openWeatherMapAPIKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key

// Function to fetch data from REST Countries API
async function fetchCountries() {
    try {
        const response = await fetch(restCountriesURL);
        const countries = await response.json();
        displayCountries(countries);
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

// Function to fetch weather data for a given country's capital
async function fetchWeather(capital) {
    try {
        const response = await fetch(`${openWeatherMapURL}?q=${capital}&appid=${openWeatherMapAPIKey}&units=metric`);
        const weather = await response.json();
        alert(`Current weather in ${capital}: ${weather.main.temp}°C`);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Function to display countries in Bootstrap cards
function displayCountries(countries) {
    const container = document.getElementById('countries-container');
    container.innerHTML = '';

    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-sm-12 mb-4';

        const cardInner = `
            <div class="card">
                <div class="card-header">
                    ${country.name.common}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Capital: ${country.capital ? country.capital[0] : 'N/A'}</h5>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country Code: ${country.cca3}</p>
                    <p class="card-text">Latlng: ${country.latlng ? country.latlng.join(', ') : 'N/A'}</p>
                    <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="img-fluid mb-3">
                    <button class="btn btn-primary" onclick="fetchWeather('${country.capital ? country.capital[0] : ''}')">Click for Weather</button>
                </div>
            </div>
        `;

        card.innerHTML = cardInner;
        container.appendChild(card);
    });
}

// Fetch and display countries on page load
fetchCountries();

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const weatherDisplay = document.getElementById('weather-display');
    const errorMessage = document.getElementById('error-message');

    // IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key.
    // DO NOT push your actual API key directly to public GitHub repos in production apps!
    // For a simple portfolio project, this is acceptable, but be aware of the security implication.
    const API_KEY = '18cacae7c4cf75a99ebbaf110c963bd0'; // <--- PASTE YOUR API KEY HERE
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    searchButton.addEventListener('click', getWeather);
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            getWeather();
        }
    });

    async function getWeather() {
        const cityName = cityInput.value.trim();
        if (cityName === '') {
            displayError('Please enter a city name.');
            return;
        }

        clearDisplay();
        displayMessage('Fetching weather data...');

        const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`; // 'units=metric' for Celsius

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) { // Check if the HTTP status code is 2xx
                displayWeather(data);
            } else {
                // Handle API errors (e.g., city not found, invalid API key)
                const errorMsg = data.message || 'Something went wrong. Please try again.';
                displayError(`Error: ${errorMsg}`);
            }
        } catch (error) {
            // Handle network errors (e.g., no internet connection)
            console.error('Network or parsing error:', error);
            displayError('Could not connect to weather service. Please check your internet connection.');
        }
    }

    function displayWeather(data) {
        errorMessage.textContent = ''; // Clear any previous errors

        if (!data || !data.main || !data.weather || data.weather.length === 0) {
            displayError('Could not retrieve weather data for this city.');
            return;
        }

        const cityName = data.name;
        const country = data.sys.country;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        weatherDisplay.innerHTML = `
            <p class="city-name">${cityName}, ${country}</p>
            <p class="temperature">${temp}°C</p>
            <p class="description">${description}</p>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
        `;
    }

    function displayError(message) {
        clearDisplay();
        errorMessage.textContent = message;
        weatherDisplay.innerHTML = `<p class="message"></p>`; // Clear existing messages
    }

    function displayMessage(message) {
        errorMessage.textContent = '';
        weatherDisplay.innerHTML = `<p class="message">${message}</p>`;
    }

    function clearDisplay() {
        weatherDisplay.innerHTML = '';
        errorMessage.textContent = '';
    }
});

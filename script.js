// API Configuration
const API_KEY = '6a33cb200fca48e3f337787759f47b4c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const themeToggle = document.querySelector('.theme-toggle');
const cityName = document.getElementById('city-name');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const forecastCards = document.getElementById('forecast-cards');
const loadingOverlay = document.getElementById('loading-overlay');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = document.body.dataset.theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Initialize theme
document.body.dataset.theme = 'light';

// Get current date
function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = new Date().toLocaleDateString('en-US', options);
}

// Get weather icon
function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fa-sun',
        '01n': 'fa-moon',
        '02d': 'fa-cloud-sun',
        '02n': 'fa-cloud-moon',
        '03d': 'fa-cloud',
        '03n': 'fa-cloud',
        '04d': 'fa-cloud',
        '04n': 'fa-cloud',
        '09d': 'fa-cloud-rain',
        '09n': 'fa-cloud-rain',
        '10d': 'fa-cloud-sun-rain',
        '10n': 'fa-cloud-moon-rain',
        '11d': 'fa-bolt',
        '11n': 'fa-bolt',
        '13d': 'fa-snowflake',
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',
        '50n': 'fa-smog'
    };
    return iconMap[iconCode] || 'fa-cloud';
}

// Show loading overlay
function showLoading() {
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.opacity = '1';
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 300);
}

// Fetch current weather
async function fetchCurrentWeather(city) {
    showLoading();
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        
        // Check for API key errors
        if (data.cod === 401) {
            throw new Error('API key is invalid or not activated yet. Please wait a few hours for the key to activate, or check if the key is correct.');
        }
        
        // Check if the response contains an error
        if (data.cod && data.cod !== 200) {
            throw new Error(data.message || 'City not found');
        }

        // Validate the data structure
        if (!data.main || !data.weather || !data.weather[0]) {
            console.error('Invalid API response:', data);
            throw new Error('Invalid weather data received');
        }

        // Animate the updates
        cityName.style.animation = 'none';
        cityName.offsetHeight; // Trigger reflow
        cityName.style.animation = 'fadeIn 0.5s ease-in';

        cityName.textContent = data.name;
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.className = `fas ${getWeatherIcon(data.weather[0].icon)}`;
        wind.textContent = `${data.wind.speed} km/h`;
        humidity.textContent = `${data.main.humidity}%`;
        pressure.textContent = `${data.main.pressure} hPa`;

        // Update background based on weather
        updateBackground(data.weather[0].main);
    } catch (error) {
        console.error('Weather API Error:', error);
        alert('Error fetching weather data: ' + error.message);
    } finally {
        hideLoading();
    }
}

// Fetch 5-day forecast
async function fetchForecast(city) {
    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        
        forecastCards.innerHTML = '';
        const dailyForecasts = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

        dailyForecasts.forEach((forecast, index) => {
            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s forwards`;
            card.style.opacity = '0';
            card.innerHTML = `
                <h4>${new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
                <i class="fas ${getWeatherIcon(forecast.weather[0].icon)}"></i>
                <p>${Math.round(forecast.main.temp)}°C</p>
            `;
            forecastCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

// Update background based on weather
function updateBackground(weatherCondition) {
    const body = document.body;
    const conditions = {
        'Clear': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'Clouds': 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
        'Rain': 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
        'Snow': 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        'Thunderstorm': 'linear-gradient(135deg, #000000 0%, #434343 100%)',
        'Drizzle': 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
        'Mist': 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)'
    };

    body.style.background = conditions[weatherCondition] || conditions['Clear'];
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchCurrentWeather(city);
        fetchForecast(city);
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Initialize
updateDate();
fetchCurrentWeather('Jaipur'); // Default city changed to Jaipur
fetchForecast('Jaipur'); 
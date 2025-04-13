# Weather Dashboard with Real-Time Forecast

A modern, responsive weather application that provides real-time weather information and 5-day forecasts for any city worldwide. Built with HTML, CSS, and JavaScript, featuring a beautiful UI with dark/light mode support.

## Features

- 🌡️ Real-time weather data
- 📅 5-day weather forecast
- 🌙 Dark/Light mode toggle
- 🎨 Weather-based background themes
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔍 City search functionality
- 📊 Detailed weather metrics (temperature, humidity, wind speed, pressure)

## Technologies Used

- HTML5
- CSS3 (with Grid, Flexbox, and CSS Variables)
- JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome Icons

## Getting Started

### Prerequisites

- A modern web browser
- An OpenWeatherMap API key (you can get one for free at [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd @weather
```

3. Open `index.html` in your web browser

### API Key Setup

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/)
2. Get your API key from your account dashboard
3. Replace `'YOUR_API_KEY'` in `script.js` with your actual API key:
```javascript
const API_KEY = 'your-api-key-here';
```

## Usage

1. Open the application in your web browser
2. The app will automatically show weather for Jaipur (default city)
3. Enter any city name in the search box
4. Press Enter or click the search button
5. Toggle between dark and light mode using the theme button

## Features in Detail

### Current Weather Display
- City name and current date
- Temperature in Celsius
- Weather description
- Weather icon
- Wind speed
- Humidity
- Atmospheric pressure

### 5-Day Forecast
- Daily weather predictions
- Temperature for each day
- Weather icons
- Day of the week

### UI Features
- Smooth animations for all elements
- Responsive design for all screen sizes
- Dark/Light mode with smooth transitions
- Weather-based background themes
- Interactive elements with hover effects

## Code Structure

```
@weather/
├── index.html    # Main HTML structure
├── styles.css    # Styling and animations
└── script.js     # Weather API integration
```

### Key Components

1. **HTML Structure**
   - Search container
   - Current weather display
   - Forecast container
   - Theme toggle

2. **CSS Features**
   - CSS Variables for theming
   - Grid and Flexbox layouts
   - Responsive design
   - Animations and transitions

3. **JavaScript Functionality**
   - API integration
   - Data fetching and processing
   - DOM manipulation
   - Event handling
   - Error handling

## API Integration

The app uses the OpenWeatherMap API with two main endpoints:
1. Current Weather: `/weather`
2. 5-Day Forecast: `/forecast`

## Error Handling

The application includes comprehensive error handling for:
- Invalid API keys
- City not found
- Network errors
- Invalid responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Font Awesome](https://fontawesome.com/) for the weather icons
- All contributors who have helped improve this project

## Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/yourusername/weather-dashboard](https://github.com/yourusername/weather-dashboard) 
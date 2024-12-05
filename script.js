
const apiKey = '787ae1dbcf5a41e9585636c49b261560'; // Replace with your OpenWeatherMap API key
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Map weather conditions to background images


// Function to fetch weather details
const getWeather = (city) => {
	const url = `${baseURL}?q=${city}&appid=${apiKey}&units=metric`; // Using metric units for Celsius

	// Show loading spinner
	document.getElementById('cityName').innerHTML = "Loading...";

	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error('City not found');
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);

			// Update DOM elements with weather data
			document.getElementById('cityName').innerHTML = data.name;
			document.getElementById('cloud_pct').innerHTML = `${data.clouds.all}%`;
			document.getElementById('temp').innerHTML = `${data.main.temp}°C`;
			document.getElementById('feels_like').innerHTML = `${data.main.feels_like}°C`;
			document.getElementById('humidity').innerHTML = `${data.main.humidity}%`;
			document.getElementById('min_temp').innerHTML = `${data.main.temp_min}°C`;
			document.getElementById('max_temp').innerHTML = `${data.main.temp_max}°C`;
			document.getElementById('wind_speed').innerHTML = `${data.wind.speed} m/s`;
			document.getElementById('wind_degrees').innerHTML = `${data.wind.deg}°`;
			document.getElementById('sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
			document.getElementById('sunset').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

			// Update background based on weather condition

		})
		.catch((err) => {
			console.error(err);
			document.getElementById('cityName').innerHTML = "City not found!";
		});
};

// Event listener for search button
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	const city = document.getElementById('city').value;
	if (city) {
		getWeather(city);
	} else {
		alert('Please enter a city name!');
	}
});

// Default weather for a popular city
getWeather("London");


































































































































































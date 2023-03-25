const WeatherClient = require('./weatherClient');
const apiKey = require('./apiKey');
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
.then((response) => response.json())
.then((weatherData) => {
  console.log(weatherData.main.temp)
  console.log(weatherData.weather[0].main)
});

console.log('Requesting weather data');


//{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":11.09,"feels_like":10.06,"temp_min":8.19,"temp_max":12.12,"pressure":1004,"humidity":69},"visibility":10000,"wind":{"speed":3.6,"deg":240},"clouds":{"all":40},"dt":1679772013,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1679723560,"sunset":1679768423},"timezone":0,"id":2643743,"name":"London","cod":200}

const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}:`)
});
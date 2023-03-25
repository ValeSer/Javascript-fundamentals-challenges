const apiKey = require('./apiKey');

class WeatherClient {
  constructor() {

  }
  fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    return fetch(apiUrl)
      .then((response) => response.json()); //converts the response from json to ann object
  }
}

module.exports = WeatherClient;
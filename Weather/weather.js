class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = []
  }
  getWeatherData() {
    return this.weatherData;
  }
}

module.exports = Weather;
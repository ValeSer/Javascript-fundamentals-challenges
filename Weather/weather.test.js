const Weather = require('./weather');

describe('Weather', () => {
  it('returns empty array without city', (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(), 
    };
    const weather = new Weather(mockClient);
    expect(weather.getWeatherData()).toEqual([]);
    done();
  })
})

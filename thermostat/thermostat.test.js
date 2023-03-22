const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();
  it('returns an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toEqual(20);
  }); 
  it('returns temperature of 22 when raise twice', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  }); 
}); 
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

  it('returns temperature of 21', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  }); 
  it('returns temperature of 25', () => {
    thermostat.setPowerSavingMode(true);
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(25);
  });
}); 

const Thermostat = require('./thermostat');
let thermostat;

describe('Thermostat', () => {
  beforeEach(() => {
    thermostat = new Thermostat();
  });
  
  it('returns an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toEqual(20);
  }); 

  it('returns temperature of 22 when raise twice', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  }); 

  it('returns temperature of 19', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  }); 
  it('returns temperature of 25 PSMode on', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('returns temperature of minimum 10', () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    };
    expect(thermostat.getTemperature()).toEqual(10);
  }); 

  it('returns temperature of 32 PSMode off', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('resets the thermostat', () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    };
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it('returns medium energy usage at 25 degrees', () => {
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getEnergyUsage()).toEqual('Medium usage');
  })

  it('returns medium energy usage at 18 degrees', () => {
    thermostat.down();
    thermostat.down();
    expect(thermostat.getEnergyUsage()).toEqual('Medium usage');
  })

  it('returns low energy usage at 17 degrees', () => {
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getEnergyUsage()).toEqual('Low usage');
  })

  it('returns high energy usage at 26 degrees', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 6 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getEnergyUsage()).toEqual('High usage');
  })
}); 

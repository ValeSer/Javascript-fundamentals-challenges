class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    if((this.powerSavingMode === true && 
      this.temperature < 25) || 
      this.powerSavingMode === false) {
        this.temperature ++;
      };
  };

  down() {
    this.temperature --;
  }

  setPowerSavingMode(powerSavingMode) {
    this.powerSavingMode = powerSavingMode;
  }

} 


module.exports = Thermostat;
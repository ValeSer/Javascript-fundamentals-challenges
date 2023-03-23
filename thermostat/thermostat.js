class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    if(this.powerSavingMode === true && 
      this.temperature === 25) {
        return this.temperature;
      } else { 
        this.temperature ++;
      };
  };

  down() {
    this.temperature --;
  }

  setPowerSavingMode() {
    this.powerSavingMode = true;
  }

} 


module.exports = Thermostat;
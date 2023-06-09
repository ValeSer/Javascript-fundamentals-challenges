class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if((this.powerSavingMode === true && 
      this.temperature < 25) || 
      (this.powerSavingMode === false && 
      this.temperature < 32)) {
        this.temperature ++;
      };
  }

  down() {
    if(this.temperature > 10) {
      this.temperature --;
    };
  }

  setPowerSavingMode(powerSavingMode) {
    this.powerSavingMode = powerSavingMode;
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUsage(){
    if(this.temperature < 18) {
      return 'Low usage';
    } else if(this.temperature <= 25){
      return 'Medium usage';
    } else {
      return 'High usage';
    }
  }
} 


module.exports = Thermostat;
class CoffeeMachine {
  _waterAmount = 0; // защищённое 
  #waterLimit = true;

  #chechWater(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }
  
  get waterAmountHidden() {
    return this.#waterLimit;
  }

  setWaterAmount(value) {
    if (value < 0) throw new Error("Орицательное количество воды");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power; // свойство только для установки
    console.log(`Кофеварка создана, мощность ${power}`);
  }
}

let coffeeMachine = new CoffeeMachine(100);

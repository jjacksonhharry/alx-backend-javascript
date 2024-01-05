const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const clonedCar = this[cloneSymbol]();
    // Copy over attributes from the current instance to the cloned instance
    Object.assign(clonedCar, this);
    return clonedCar;
  }
}

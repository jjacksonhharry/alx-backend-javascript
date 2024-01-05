export default class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, "Square Feet");
  }

  get sqft() {
    return this._sqft;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

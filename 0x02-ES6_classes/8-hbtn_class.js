export default class HolbertonClass {
  constructor(size, location) {
    this._size = this.validateNumber(size, "Size");
    this._location = this.validateString(location, "Location");
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = this.validateNumber(newSize, "Size");
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = this.validateString(newLocation, "Location");
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

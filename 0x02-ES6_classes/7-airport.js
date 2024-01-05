export default class Airport {
  constructor(name, code) {
    this._name = this.validateString(name, "Name");
    this._code = this.validateString(code, "Code");
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, "Name");
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateString(newCode, "Code");
  }

  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

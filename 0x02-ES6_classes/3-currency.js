export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

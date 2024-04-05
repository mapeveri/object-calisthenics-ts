export class ProductName {
  private constructor(private _name: string) {}

  static of(name: string): ProductName {
    if (name.length < 3) {
      throw new Error(`${name} is an invalid name`);
    }

    return new ProductName(name);
  }

  get value(): string {
    return this._name;
  }
}

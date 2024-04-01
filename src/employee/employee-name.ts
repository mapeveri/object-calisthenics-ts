export class EmployeeName {
  private constructor(private _name: string) {}

  static of(name: string): EmployeeName {
    if (name.length < 3) {
      throw new Error(`${name} is an invalid name`);
    }

    return new EmployeeName(name);
  }

  get name(): string {
    return this._name;
  }
}

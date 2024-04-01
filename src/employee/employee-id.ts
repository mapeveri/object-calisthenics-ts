export class EmployeeId {
  private constructor(private _value: number) {}

  static of(value: number): EmployeeId {
    if (value <= 0) {
      throw new Error(`${value} is an invalid value`);
    }

    return new EmployeeId(value);
  }

  isEqual(other: EmployeeId): boolean {
    return this._value === other.value;
  }

  get value(): number {
    return this._value;
  }
}

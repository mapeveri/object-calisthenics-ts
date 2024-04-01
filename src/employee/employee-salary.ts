export class EmployeeSalary {
  private constructor(private _amount: number) {}

  static of(amount: number): EmployeeSalary {
    if (amount < 0) {
      throw new Error(`${amount} is an invalid amount`);
    }

    return new EmployeeSalary(amount);
  }

  calculateBonus(bonusPercentage: number): EmployeeSalary {
    if (bonusPercentage === 0) {
      return new EmployeeSalary(this._amount);
    }

    let salary = this._amount;
    salary += this._amount * bonusPercentage;
    return new EmployeeSalary(salary);
  }

  get amount(): number {
    return this._amount;
  }
}

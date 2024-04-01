import { DepartmentFactory } from "./department-factory";

export abstract class Department {
  constructor(private _name: string) {}

  static of(name: string): Department {
    return DepartmentFactory.createDepartment(name);
  }

  get name(): string {
    return this._name;
  }

  isEqual(name: string): boolean {
    return this._name === name;
  }

  abstract getBonusPercentage(): number;
}

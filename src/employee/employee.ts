import { Department } from "./department";
import { EmployeeId } from "./employee-id";
import { EmployeeName } from "./employee-name";
import { EmployeeSalary } from "./employee-salary";

export type EmployeePrimitives = {
  id: number
  name: string
  salary: number
  department: string
}

export class Employee {
  private constructor(
    private _id: EmployeeId,
    private _name: EmployeeName,
    private _salary: EmployeeSalary,
    private _department: Department
  ) {}

  static of(
    id: EmployeeId,
    name: EmployeeName,
    salary: EmployeeSalary,
    department: Department
  ): Employee {
    const salaryCalculated = salary.calculateBonus(
      department.getBonusPercentage()
    );

    console.log("Employee added successfully!");

    return new Employee(id, name, salaryCalculated, department);
  }

  isEqualById(id: EmployeeId): boolean {
    return this._id.isEqual(id);
  }

  isEqualByDepartmentName(name: string): boolean {
    return this._department.isEqual(name);
  }

  changeSalary(newSalary: EmployeeSalary): void {
    this._salary = newSalary;
  }

  toPrimitives(): EmployeePrimitives {
    return {
      id: this._id.value,
      name: this._name.name,
      salary: this._salary.amount,
      department: this._department.name,
    };
  }
}

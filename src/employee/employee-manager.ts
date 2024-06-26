import { Department } from "./department";
import { EmployeePrimitives } from "./employee";
import { EmployeeCollection } from "./employee-collection";
import { EmployeeId } from "./employee-id";
import { EmployeeName } from "./employee-name";
import { EmployeeSalary } from "./employee-salary";

export class EmployeeManager {
  constructor(private _employees: EmployeeCollection) {}

  addEmployee(
    id: number,
    name: string,
    salary: number,
    department: string
  ): void {
    this._employees.add(
      EmployeeId.of(id),
      EmployeeName.of(name),
      EmployeeSalary.of(salary),
      Department.of(department)
    );
  }

  findEmployeeById(id: number): EmployeePrimitives | undefined {
    return this._employees.find(EmployeeId.of(id));
  }

  removeEmployeeById(id: number): void {
    this._employees.remove(EmployeeId.of(id));
  }

  updateEmployeeSalary(id: number, newSalary: number): void {
    this._employees.updateSalary(
      EmployeeId.of(id),
      EmployeeSalary.of(newSalary)
    );
  }

  calculateTotalSalary(): number {
    return this._employees.items.reduce(
      (total, employee) => total + employee.salary,
      0
    );
  }

  getHighestPaidEmployeeByDepartment(
    department: string
  ): EmployeePrimitives | undefined {
    let highestSalary = -1;
    let highestPaidEmployee = undefined;

    const employeesByDeparment = this.getEmployeesByDepartment(department);

    for (const employee of employeesByDeparment) {
      highestSalary = Math.max(highestSalary, employee.salary);
      highestPaidEmployee =
        highestSalary === employee.salary ? employee : highestPaidEmployee;
    }

    return highestPaidEmployee;
  }

  calculateAverageSalaryByDepartment(department: string): number {
    const employeesByDeparment = this.getEmployeesByDepartment(department);

    return (
      employeesByDeparment.reduce((accumulator, employee) => {
        return accumulator + employee.salary;
      }, 0) / (employeesByDeparment.length || 1)
    );
  }

  get items(): EmployeePrimitives[] {
    return this._employees.items;
  }

  private getEmployeesByDepartment(department: string): EmployeePrimitives[] {
    return this._employees.findByDepartment(Department.of(department));
  }
}

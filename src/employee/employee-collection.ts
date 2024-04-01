import { Department } from "./department";
import { Employee, EmployeePrimitives } from "./employee";
import { EmployeeId } from "./employee-id";
import { EmployeeName } from "./employee-name";
import { EmployeeSalary } from "./employee-salary";

export class EmployeeCollection {
  constructor(private _employees: Employee[] = []) {}

  add(
    id: EmployeeId,
    name: EmployeeName,
    salary: EmployeeSalary,
    department: Department
  ): void {
    if (this.find(id)) {
      console.log("Error! Employee already exists.");
      return;
    }

    this._employees.push(Employee.of(id, name, salary, department));

    console.log("Employee added successfully!");
  }

  find(id: EmployeeId): EmployeePrimitives | undefined {
    const employee = this._employees.find((employee) =>
      employee.isEqualById(id)
    );
    if (!employee) return undefined;

    return employee.toPrimitives();
  }

  findByDepartment(department: Department): EmployeePrimitives[] {
    const employees = this._employees.filter((employee) =>
      employee.isEqualByDepartmentName(department.name)
    );
    return employees.map((employee) => employee.toPrimitives());
  }

  remove(id: EmployeeId): void {
    const index = this._employees.findIndex((employee) =>
      employee.isEqualById(id)
    );
    if (index === -1) {
      console.log("Error! Employee not found.");
      return;
    }

    if (this._employees[index].isEqualByDepartmentName("Management")) {
      console.log("Error! Cannot remove a management employee.");
      return;
    }

    this._employees.splice(index, 1);
    console.log("Employee removed successfully!");
  }

  updateSalary(id: EmployeeId, newSalary: EmployeeSalary): void {
    const employee = this._employees.find((employee) =>
      employee.isEqualById(id)
    );
    if (!employee) {
      console.log("Error! Employee not found.");
      return;
    }

    employee.changeSalary(newSalary);
    console.log("Salary updated successfully!");
  }

  get items(): EmployeePrimitives[] {
    return this._employees.map((employee) => employee.toPrimitives());
  }
}

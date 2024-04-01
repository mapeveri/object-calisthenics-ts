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

  getHighestPaidEmployeeByDepartment(department: string): any {
    let highestSalary = -1;
    let highestPaidEmployee = null;

    const employeesByDeparment = this._employees.findByDeparment(
      Department.of(department)
    );

    for (const employee of employeesByDeparment) {
      highestSalary = Math.max(highestSalary, employee.salary);
      highestPaidEmployee =
        highestSalary === employee.salary ? employee : highestPaidEmployee;
    }

    return highestPaidEmployee;
  }

  calculateAverageSalaryByDepartment(department: string): number {
    let totalSalary = 0;
    let count = 0;

    const employeesByDeparment = this._employees.findByDeparment(
      Department.of(department)
    );

    for (const employee of employeesByDeparment) {
      totalSalary += employee.salary;
      count++;
    }

    return count > 0 ? totalSalary / count : 0;
  }

  get items(): EmployeePrimitives[] {
    return this._employees.items;
  }
}

const employeeManager = new EmployeeManager(new EmployeeCollection());

employeeManager.addEmployee(1, "John", 4000, "Engineering");
employeeManager.addEmployee(2, "Alice", 3000, "HR");
employeeManager.addEmployee(3, "Bob", 4500, "Management");
employeeManager.addEmployee(4, "David", 4200, "Engineering");
employeeManager.addEmployee(5, "Eva", 3200, "HR");

console.log("Employee with ID 1:", employeeManager.findEmployeeById(1));
console.log("Total salary:", employeeManager.calculateTotalSalary());

employeeManager.updateEmployeeSalary(1, 4500);
console.log("Updated employee:", employeeManager.findEmployeeById(1));

employeeManager.removeEmployeeById(3);
console.log("After removing an employee:", employeeManager.items);

console.log(
  "Highest paid employee in Engineering department:",
  employeeManager.getHighestPaidEmployeeByDepartment("Engineering")
);
console.log(
  "Average salaries in HR department:",
  employeeManager.calculateAverageSalaryByDepartment("HR")
);

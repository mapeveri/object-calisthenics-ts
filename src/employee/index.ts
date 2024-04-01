import { EmployeeCollection } from "./employee-collection";
import { EmployeeManager } from "./employee-manager";

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

export let employeeData: any[] = [];

export function addEmployee(
  id: number,
  name: string,
  salary: number,
  department: string
): void {
  if (employeeExists(id)) {
    console.log("Error! Employee already exists.");
    return;
  }

  const employee = { id, name, salary, department };
  if (department === "Engineering") {
    salary += calculateBonus(salary, 0.1);
  } 
  
  if (department === "HR") {
    salary += calculateBonus(salary, 0.2);
  }

  employeeData.push(employee);
  console.log("Employee added successfully!");
}

export function employeeExists(id: number): boolean {
  return employeeData.some((employee) => employee.id === id);
}

export function calculateBonus(
  salary: number,
  bonusPercentage: number
): number {
  return salary * bonusPercentage;
}

export function findEmployeeById(id: number): any {
  return employeeData.find((employee) => employee.id === id);
}

export function calculateTotalSalary(): number {
  return employeeData.reduce((total, employee) => total + employee.salary, 0);
}

export function removeEmployeeById(id: number): void {
  const index = employeeData.findIndex((employee) => employee.id === id);
  if (index === -1) {
    console.log("Error! Employee not found.");
    return;
  }

  if (employeeData[index].department === "Management") {
    console.log("Error! Cannot remove a management employee.");
    return;
  }

  employeeData.splice(index, 1);
  console.log("Employee removed successfully!");
}

export function updateEmployeeSalary(id: number, newSalary: number): void {
  const employee = findEmployeeById(id);
  if (!employee) {
    console.log("Error! Employee not found.");
    return;
  }

  employee.salary = newSalary;
  console.log("Salary updated successfully!");
}

export function getHighestPaidEmployeeByDepartment(department: string): any {
  let highestSalary = -1;
  let highestPaidEmployee = null;

  const employeesByDeparment = employeeData.filter(
    (employee) => employee.department === department
  );
  for (const employee of employeesByDeparment) {
    highestSalary = Math.max(highestSalary, employee.salary);
    highestPaidEmployee =
      highestSalary === employee.salary ? employee : highestPaidEmployee;
  }

  return highestPaidEmployee;
}

export function calculateAverageSalaryByDepartment(department: string): number {
  let totalSalary = 0;
  let count = 0;

  const employeesByDeparment = employeeData.filter(
    (employee) => employee.department === department
  );
  for (const employee of employeesByDeparment) {
    totalSalary += employee.salary;
    count++;
  }

  return count > 0 ? totalSalary / count : 0;
}

addEmployee(1, "John", 4000, "Engineering");
addEmployee(2, "Alice", 3000, "HR");
addEmployee(3, "Bob", 4500, "Management");
addEmployee(4, "David", 4200, "Engineering");
addEmployee(5, "Eva", 3200, "HR");

console.log("Employee with ID 1:", findEmployeeById(1));
console.log("Total salary:", calculateTotalSalary());

updateEmployeeSalary(1, 4500);
console.log("Updated employee:", findEmployeeById(1));

removeEmployeeById(3);
console.log("After removing an employee:", employeeData);

console.log(
  "Highest paid employee in Engineering department:",
  getHighestPaidEmployeeByDepartment("Engineering")
);
console.log(
  "Average salaries in HR department:",
  calculateAverageSalaryByDepartment("HR")
);

import {
  addEmployee,
  calculateAverageSalaryByDepartment,
  calculateTotalSalary,
  employeeData,
  findEmployeeById,
  getHighestPaidEmployeeByDepartment,
  removeEmployeeById,
  updateEmployeeSalary,
} from "./employee";

describe("addEmployee", () => {
  beforeEach(() => {
    employeeData.length = 0;
  });

  test("Adds a new employee successfully", () => {
    addEmployee(1, "John", 4000, "Engineering");
    expect(employeeData.length).toBe(1);
  });

  test("Does not add employee if already exists", () => {
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(1, "John", 4000, "Engineering");
    expect(employeeData.length).toBe(1);
  });
});

describe("findEmployeeById", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(2, "Alice", 3000, "HR");
  });

  test("Finds an employee by ID", () => {
    expect(findEmployeeById(1).name).toBe("John");
  });

  test("Returns null if employee does not exist", () => {
    expect(findEmployeeById(3)).toBeUndefined();
  });
});

describe("calculateTotalSalary", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(2, "Alice", 3000, "HR");
  });

  test("Calculates total salary correctly", () => {
    expect(calculateTotalSalary()).toBe(8000);
  });
});

describe("updateEmployeeSalary", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
  });

  test("Updates employee salary successfully", () => {
    updateEmployeeSalary(1, 4500);
    expect(findEmployeeById(1).salary).toBe(4500);
  });

  test("Shows error message if employee does not exist", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    updateEmployeeSalary(2, 4500);
    expect(consoleSpy).toHaveBeenCalledWith("Error! Employee not found.");
    consoleSpy.mockRestore();
  });
});

describe("removeEmployeeById", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(2, "Alice", 3000, "HR");
  });

  test("Removes an employee successfully", () => {
    removeEmployeeById(1);
    expect(employeeData.length).toBe(1);
  });

  test("Shows error message if employee does not exist", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    removeEmployeeById(3);
    expect(consoleSpy).toHaveBeenCalledWith("Error! Employee not found.");
    consoleSpy.mockRestore();
  });
});

describe("getHighestPaidEmployeeByDepartment", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(2, "Alice", 3500, "Engineering");
    addEmployee(3, "Bob", 3200, "HR");
  });

  test("Returns the highest paid employee of the department", () => {
    expect(getHighestPaidEmployeeByDepartment("Engineering").name).toBe("John");
  });

  test("Returns null if no employees in the department", () => {
    expect(getHighestPaidEmployeeByDepartment("Management")).toBeNull();
  });
});

describe("calculateAverageSalaryByDepartment", () => {
  beforeEach(() => {
    employeeData.length = 0;
    addEmployee(1, "John", 4000, "Engineering");
    addEmployee(2, "Alice", 3500, "Engineering");
    addEmployee(3, "Bob", 3200, "HR");
  });

  test("Calculates the average salary of the department correctly", () => {
    expect(calculateAverageSalaryByDepartment("Engineering")).toBe(4125);
  });

  test("Returns 0 if no employees in the department", () => {
    expect(calculateAverageSalaryByDepartment("Management")).toBe(0);
  });
});

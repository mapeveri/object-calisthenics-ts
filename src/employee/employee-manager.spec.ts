import { EmployeeCollection } from "./employee-collection";
import { EmployeeManager } from "./employee-manager";

describe("EmployeeManager", () => {
  let employeeManager: EmployeeManager;
  beforeEach(() => {
    employeeManager = new EmployeeManager(new EmployeeCollection());
  });

  describe("addEmployee", () => {
    test("Adds a new employee successfully", () => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      expect(employeeManager.items.length).toBe(1);
    });

    test("Does not add employee if already exists", () => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      expect(employeeManager.items.length).toBe(1);
    });
  });

  describe("findEmployeeById", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(2, "Alice", 3000, "HR");
    });

    test("Finds an employee by ID", () => {
      expect(employeeManager.findEmployeeById(1)?.name).toBe("John");
    });

    test("Returns null if employee does not exist", () => {
      expect(employeeManager.findEmployeeById(3)).toBeUndefined();
    });
  });

  describe("calculateTotalSalary", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(2, "Alice", 3000, "HR");
    });

    test("Calculates total salary correctly", () => {
      expect(employeeManager.calculateTotalSalary()).toBe(8000);
    });
  });

  describe("updateEmployeeSalary", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
    });

    test("Updates employee salary successfully", () => {
      employeeManager.updateEmployeeSalary(1, 4500);
      expect(employeeManager.findEmployeeById(1)?.salary).toBe(4500);
    });

    test("Shows error message if employee does not exist", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();
      employeeManager.updateEmployeeSalary(2, 4500);
      expect(consoleSpy).toHaveBeenCalledWith("Error! Employee not found.");
      consoleSpy.mockRestore();
    });
  });

  describe("removeEmployeeById", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(2, "Alice", 3000, "HR");
    });

    test("Removes an employee successfully", () => {
      employeeManager.removeEmployeeById(1);
      expect(employeeManager.items.length).toBe(1);
    });

    test("Shows error message if employee does not exist", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();
      employeeManager.removeEmployeeById(3);
      expect(consoleSpy).toHaveBeenCalledWith("Error! Employee not found.");
      consoleSpy.mockRestore();
    });
  });

  describe("getHighestPaidEmployeeByDepartment", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(2, "Alice", 3500, "Engineering");
      employeeManager.addEmployee(3, "Bob", 3200, "HR");
    });

    test("Returns the highest paid employee of the department", () => {
      expect(
        employeeManager.getHighestPaidEmployeeByDepartment("Engineering").name
      ).toBe("John");
    });

    test("Returns null if no employees in the department", () => {
      expect(
        employeeManager.getHighestPaidEmployeeByDepartment("Management")
      ).toBeNull();
    });
  });

  describe("calculateAverageSalaryByDepartment", () => {
    beforeEach(() => {
      employeeManager.addEmployee(1, "John", 4000, "Engineering");
      employeeManager.addEmployee(2, "Alice", 3500, "Engineering");
      employeeManager.addEmployee(3, "Bob", 3200, "HR");
    });

    test("Calculates the average salary of the department correctly", () => {
      expect(
        employeeManager.calculateAverageSalaryByDepartment("Engineering")
      ).toBe(4125);
    });

    test("Returns 0 if no employees in the department", () => {
      expect(
        employeeManager.calculateAverageSalaryByDepartment("Management")
      ).toBe(0);
    });
  });
});

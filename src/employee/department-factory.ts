import { Department } from "./department";

export class DepartmentFactory {
  static createDepartment(name: string): Department {
    if (name === "Engineering") {
      const { EngineeringDepartment } = require("./engineering-department");
      return new EngineeringDepartment(name);
    }

    if (name === "HR") {
      const { HRDepartment } = require("./hr-department");
      return new HRDepartment(name);
    }

    if (name === "Management") {
      const { ManagementDepartment } = require("./management-department");
      return new ManagementDepartment(name);
    }

    throw new Error("Invalid department");
  }
}

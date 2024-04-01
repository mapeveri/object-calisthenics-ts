import { Department } from "./department";

export class EngineeringDepartment extends Department {
  private BONUS_PERCENTAGE = 0.1;

  static of(name: string): Department {
    return new EngineeringDepartment(name);
  }

  getBonusPercentage(): number {
    return this.BONUS_PERCENTAGE;
  }
}

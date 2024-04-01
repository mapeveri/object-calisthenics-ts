import { Department } from "./department";

export class ManagementDepartment extends Department {
  private BONUS_PERCENTAGE = 0;

  static of(name: string): Department {
    return new ManagementDepartment(name);
  }

  getBonusPercentage(): number {
    return this.BONUS_PERCENTAGE;
  }
}

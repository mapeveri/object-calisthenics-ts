import { Department } from "./department";

export class HRDepartment extends Department {
  private BONUS_PERCENTAGE = 0.2;

  static of(name: string): Department {
    return new HRDepartment(name);
  }

  getBonusPercentage(): number {
    return this.BONUS_PERCENTAGE;
  }
}

export class ProductQuantity {
  private constructor(private _amount: number) {}

  static of(amount: number) {
    if (amount < 0) {
      throw new Error(`${amount} is an invalid quantity`);
    }

    return new ProductQuantity(amount);
  }

  get amount(): number {
    return this._amount;
  }
}

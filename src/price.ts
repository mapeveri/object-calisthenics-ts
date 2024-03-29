export class Price {
  private constructor(private _amount: number) {}

  static of(amount: number) {
    if (amount < 0) {
      throw new Error(`${amount} is an invalid price`);
    }

    return new Price(amount)
  }

  get amount(): number {
    return this._amount;
  }
}

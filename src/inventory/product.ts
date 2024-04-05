import { Price } from "./price";
import { ProductName } from "./product-name";
import { ProductQuantity } from "./product-quantity";

export class Product {
  private constructor(
    private _name: ProductName,
    private _price: Price,
    private _quantity: ProductQuantity
  ) {}

  static of(
    name: ProductName,
    price: Price,
    quantity: ProductQuantity
  ): Product {
    return new Product(name, price, quantity);
  }

  isEqual(name: string): boolean {
    return name === this._name.value;
  }

  total(): number {
    return this._price.amount * this._quantity.amount;
  }

  isQuantityLessThan(quantity: number): boolean {
    return this._quantity.amount < quantity;
  }

  toString(): string {
    return `Name: ${this._name.value}, Price: ${this._price.amount}, Quantity: ${this._quantity.amount}`;
  }
}

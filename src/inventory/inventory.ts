import { Price } from "./price";
import { ProductCollection } from "./product-collection";
import { ProductName } from "./product-name";
import { ProductQuantity } from "./product-quantity";

export class Inventory {
  constructor(private _products: ProductCollection) {}

  addProduct(name: string, price: number, quantity: number): void {
    this._products.add(
      ProductName.of(name),
      Price.of(price),
      ProductQuantity.of(quantity)
    );
  }

  removeProduct(name: string): void {
    this._products.remove(name);
  }

  findProduct(name: string): string | undefined {
    const product = this._products.find(name);
    if (!product) return;

    return product;
  }

  getProductsLessThan(quantity: number): string[] {
    return this._products.getWithQuantityLessThan(quantity);
  }

  displayInventory(): string[] {
    console.log("Current Inventory:");
    return this._products.items();
  }

  total(): number {
    return this._products.total();
  }
}

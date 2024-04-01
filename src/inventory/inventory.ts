import { ProductCollection } from "./product-collection";

export class Inventory {
  constructor(private _products: ProductCollection) {}

  addProduct(name: string, price: number, quantity: number): void {
    this._products.add(name, price, quantity);
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

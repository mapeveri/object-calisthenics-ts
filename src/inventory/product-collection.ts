import { Price } from "./price";
import { Product } from "./product";
import { ProductName } from "./product-name";
import { ProductQuantity } from "./product-quantity";

export class ProductCollection {
  constructor(private _products: Product[] = []) {}

  add(name: ProductName, price: Price, quantity: ProductQuantity): void {
    this._products.push(Product.of(name, price, quantity));
    console.log(`Product "${name.value}" added to inventory.`);
  }

  remove(name: string): void {
    if (typeof name !== "string") {
      console.log("Invalid product name!");
      return;
    }

    const removedProducts = this._products.filter(
      (product) => !product.isEqual(name)
    );

    if (removedProducts.length < this._products.length) {
      console.log(`Product "${name}" removed from inventory.`);
      this._products.splice(0, this._products.length, ...removedProducts);
      return;
    }

    console.log(`Product ${name} not found`);
  }

  find(name: string): string | undefined {
    if (typeof name !== "string") {
      console.log("Invalid product name!");
      return;
    }

    const product = this._products.find((product) => product.isEqual(name));
    if (!product) {
      console.log(`Product "${name}" not found in inventory.`);
      return;
    }

    console.log(`Found Product: ${product.toString()}`);

    return product.toString();
  }

  getWithQuantityLessThan(quantity: number): string[] {
    if (typeof quantity !== "number") {
      console.log("Invalid quantity!");
      return [];
    }

    console.log(`Products with quantity less than ${quantity}:`);
    return this._products
      .filter((product) => product.isQuantityLessThan(quantity))
      .map((product) => product.toString());
  }

  total(): number {
    return this._products.reduce(
      (accumulator, product) => accumulator + product.total(),
      0
    );
  }

  items(): string[] {
    return this._products.map((product) => product.toString());
  }
}

import { Inventory } from "./inventory";
import { ProductCollection } from "./product-collection";

describe("Inventory Management System", () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = new Inventory(new ProductCollection());
  });

  test("Add Product", () => {
    inventory.addProduct("Laptop", 999.99, 5);

    expect(inventory.total()).toBe(4999.95);
  });

  test("Remove Product", () => {
    inventory.addProduct("Laptop", 999.99, 5);
    inventory.removeProduct("Laptop");

    expect(inventory.total()).toBe(0);
  });

  test("Find Product By Name", () => {
    inventory.addProduct("Laptop", 999.99, 5);
    const product = inventory.findProduct("Laptop");

    expect(product).toBe("Name: Laptop, Price: 999.99, Quantity: 5");
  });

  test("Find Non-existent Product By Name", () => {
    const product = inventory.findProduct("Phone");

    expect(product).toBeUndefined();
  });

  test("Get Products With Quantity Less Than", () => {
    inventory.addProduct("Laptop", 999.99, 5);
    inventory.addProduct("Phone", 599.99, 10);

    const products = inventory.getProductsLessThan(10);

    expect(products).toEqual(["Name: Laptop, Price: 999.99, Quantity: 5"]);
  });

  test("Get Total Inventory Value", () => {
    inventory.addProduct("Laptop", 999.99, 5);
    inventory.addProduct("Phone", 599.99, 10);
    const totalValue = inventory.total();

    expect(totalValue).toBeCloseTo(10999.85);
  });

  test("Display Inventory", () => {
    inventory.addProduct("Laptop", 999.99, 5);
    inventory.addProduct("Phone", 599.99, 10);
    const products = inventory.displayInventory();

    expect(products).toEqual([
      "Name: Laptop, Price: 999.99, Quantity: 5",
      "Name: Phone, Price: 599.99, Quantity: 10",
    ]);
  });
});

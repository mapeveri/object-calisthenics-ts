import {
  addProduct,
  removeProductByName,
  findProductByName,
  getProductsWithQuantityLessThan,
  getTotalInventoryValue,
  displayInventory,
  inventory,
} from "./inventory";

describe("Inventory Management System", () => {
  beforeEach(() => {
    inventory.splice(0, inventory.length);
  });

  test("Add Product", () => {
    addProduct("Laptop", 999.99, 5);
    expect(inventory.length).toBe(1);
  });

  test("Remove Product", () => {
    addProduct("Laptop", 999.99, 5);
    removeProductByName("Laptop");
    expect(inventory.length).toBe(0);
  });

  test("Find Product By Name", () => {
    addProduct("Laptop", 999.99, 5);
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    findProductByName("Laptop");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Found Product: Name: Laptop, Price: 999.99, Quantity: 5"
    );
    consoleSpy.mockRestore();
  });

  test("Find Non-existent Product By Name", () => {
    const product = findProductByName("Phone");
    expect(product).toBeUndefined();
  });

  test("Get Products With Quantity Less Than", () => {
    addProduct("Laptop", 999.99, 5);
    addProduct("Phone", 599.99, 10);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    getProductsWithQuantityLessThan(10);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Products with quantity less than 10:"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Name: Laptop, Price: 999.99, Quantity: 5"
    );

    consoleSpy.mockRestore();
  });

  test("Get Total Inventory Value", () => {
    addProduct("Laptop", 999.99, 5);
    addProduct("Phone", 599.99, 10);
    const totalValue = getTotalInventoryValue();
    expect(totalValue).toBeCloseTo(999.99 * 5 + 599.99 * 10);
  });

  test("Display Inventory", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    addProduct("Laptop", 999.99, 5);
    addProduct("Phone", 599.99, 10);
    displayInventory();
    expect(consoleSpy).toHaveBeenCalledWith("Current Inventory:");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Name: Laptop, Price: 999.99, Quantity: 5"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Name: Phone, Price: 599.99, Quantity: 10"
    );
    consoleSpy.mockRestore();
  });
});

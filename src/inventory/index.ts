import { Inventory } from "./inventory";
import { ProductCollection } from "./product-collection";

const inventory = new Inventory(new ProductCollection());

inventory.addProduct("Laptop", 999.99, 5);
inventory.addProduct("Phone", 599.99, 10);
inventory.addProduct("Tablet", 299.99, 8);

inventory.removeProduct("Phone");

console.log(inventory.findProduct("Laptop"));
console.log(inventory.findProduct("Phone"));
console.log(inventory.getProductsLessThan(10));

console.log(inventory.total());
console.log(inventory.displayInventory());

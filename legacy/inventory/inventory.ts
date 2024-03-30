export const inventory: { name: string; price: number; quantity: number }[] =
  [];

export function addProduct(
  name: string,
  price: number,
  quantity: number
): void {
  if (
    typeof name === "string" &&
    typeof price === "number" &&
    typeof quantity === "number"
  ) {
    inventory.push({ name, price, quantity });
    console.log(`Product "${name}" added to inventory.`);
  } else {
    console.log("Invalid product details!");
  }
}

export function removeProductByName(name: string): void {
  if (typeof name === "string") {
    let removed = false;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name === name) {
        inventory.splice(i, 1);
        console.log(`Product "${name}" removed from inventory.`);
        removed = true;
        break;
      }
    }

    if (!removed) {
      console.log(`Product "${name}" not found in inventory.`);
    }
  } else {
    console.log("Invalid product name!");
  }
}

export function findProductByName(name: string): void {
  if (typeof name === "string") {
    let found = false;
    for (const product of inventory) {
      if (product.name === name) {
        console.log(
          `Found Product: Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
        );
        found = true;
        break;
      }
    }

    if (!found) {
      console.log(`Product "${name}" not found in inventory.`);
    }
  } else {
    console.log("Invalid product name!");
  }
}

export function getProductsWithQuantityLessThan(quantity: number): void {
  if (typeof quantity === "number") {
    console.log(`Products with quantity less than ${quantity}:`);
    for (const product of inventory) {
      if (product.quantity < quantity) {
        console.log(
          `Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
        );
      }
    }
  } else {
    console.log("Invalid quantity!");
  }
}

export function getTotalInventoryValue(): number {
  let totalValue = 0;
  for (const product of inventory) {
    totalValue += product.price * product.quantity;
  }
  console.log(totalValue);
  return totalValue;
}

export function displayInventory(): void {
  console.log("Current Inventory:");
  for (const product of inventory) {
    console.log(
      `Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
    );
  }
}

addProduct("Laptop", 999.99, 5);
addProduct("Phone", 599.99, 10);
addProduct("Tablet", 299.99, 8);

removeProductByName("Phone");

findProductByName("Laptop");
findProductByName("Phone");

getProductsWithQuantityLessThan(10);

getTotalInventoryValue();

displayInventory();

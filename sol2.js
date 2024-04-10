let order = {
  orderId: "123456",
  productName: "LaptopMobile",
  quantity: 2,
};

console.log("Without Distructuring");
console.log("Order Id :" + order.orderId);
console.log("Product Name :" + order.productName);
console.log("Quantity :" + order.quantity);

console.log("With Distructuring");

let { orderId, productName, quantity } = order;

console.log("Order Id :" + orderId);
console.log("Product Name :" + productName);
console.log("Quantity :" + quantity);

/**Without Distructuring
Order Id :123456
Product Name :LaptopMobile
Quantity :2
With Distructuring
Order Id :123456
Product Name :LaptopMobile
Quantity :2 */

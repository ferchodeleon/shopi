/**
 * This functions calculates the total price of all products in the cart
 * @param {Array} products cartProducts: Array of objects with the following structure:
 * @returns {number} total price
 */
// {
//   id: 1,
//   title: "Product 1",
//   price: 100,
//   images: ["url1", "url2"],
// }
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });

  return sum;
};

function shoppingCard() {
  const cardItems = [];

  function itemIndexInCard(productId) {
    return cardItems.findIndex((item) => item.id === productId);
  }
  return {
    addItem: function (product) {
      const itemIndex = itemIndexInCard(product.id);

      if (itemIndex !== -1) {
        cardItems[itemIndex].quantity++;
      } else {
        cardItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
    },

    removeItem: function (productId) {
      const indexToRemove = itemIndexInCard(productId);

      if (indexToRemove !== -1) {
        cardItems.splice(indexToRemove, 1);
      }
    },

    getCardItems: function () {
      return cardItems;
    },
  };
}

const card = shoppingCard();
console.log("Card Items : ", card.getCardItems());
const product1 = { id: 1, name: "Product 1", price: 13 };
const product2 = { id: 2, name: "Product 2", price: 53 };

card.addItem(product1);
card.addItem(product2);
card.addItem(product1);

console.log("Card Items : ", card.getCardItems());

card.removeItem(2);
console.log("Card Items : ", card.getCardItems());

/**Card Items :  []
Card Items :  [
  { id: 1, name: 'Product 1', price: 13, quantity: 2 },
  { id: 2, name: 'Product 2', price: 53, quantity: 1 }
]
Card Items :  [ { id: 1, name: 'Product 1', price: 13, quantity: 2 } ] */

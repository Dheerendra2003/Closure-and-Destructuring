function shoppingCard() {
  const cardItem = [];
  return {
    getCardItems: function () {
      return cardItem;
    },
  };
}

const card = shoppingCard();
console.log("Card Items  : " + card.getCardItems());

//Card Items  : 
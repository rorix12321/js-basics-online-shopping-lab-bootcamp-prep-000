var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  let item = {itemName: itemName,
    itemPrice: Math.floor(Math.random()* 100 + 1)};
    cart.push(item);
    return `${item.itemName} has been added to your cart.`;
}

function removeFromCart(itemName) {
  (for (let i = 0, condition; i++) {
    let removed = i;
    if (i === itemName) {
      cart.splice(removed);
      return cart;
    } else {
      return "That item is not in your cart.";
    }
}

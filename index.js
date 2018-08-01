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
    for (let i = 0; i < cart.length; i++) {
    let removed = cart[i];
    if (removed.itemName === itemName) {
      cart.splice(i, 1);
      return cart;
    } else {
      return "That item is not in your cart.";
}
}
}
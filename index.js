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

function removeFromCart(item) {
  var index = -1;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      return "That item is not in your cart.";
    } else {
      return cart.splice(index, 1);
    }
  }

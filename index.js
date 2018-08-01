var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var object = {itemName:`${item}`, itemPrice:price};
  cart.push(object);
  return `${item} has been added to your cart.`
}
}

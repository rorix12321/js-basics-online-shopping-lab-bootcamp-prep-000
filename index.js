var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function viewCart() {
  let cartREEE = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++) {
    let current = cart[i];
    cartREEE += current.itemName;
    cartREEE += ` at $${current.itemPrice}, `;
    if (i < cart.legnth -1) {
      cartREEE += ", ";
    }
    else {
      cartREEE += "and "
    }
  } return "Your shopping cart is empty."
}

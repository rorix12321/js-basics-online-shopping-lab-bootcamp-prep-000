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

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var msg = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      msg += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i === cart.length - 2) {
        msg += ", and ";
      } else if (i === cart.length -1) {
        msg += ".";
      } else {
        msg += ", ";
      }
    }
    return msg;
  }
}

function total() {
  var totalprice = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var name = item.itemName;
    var price = item.itemPrice;
    totalprice = totalprice + item.itemPrice;
  }
  return totalprice;
}

function removeFromCart(itemName) {
    for (let i = 0; i < cart.length; i++) {
      let removed = cart[i];
      if (removed.itemName === itemName) {
        let item = cart.splice(i, 1);
        return item;
      }
    }
    return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}

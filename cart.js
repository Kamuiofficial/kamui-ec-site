
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({name: name, price: price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " をカートに追加しました。");
}
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById("cart-items");
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>カートは空です。</p>";
    } else {
      let list = "<ul>";
      cart.forEach(item => {
        list += `<li>${item.name} - ¥${item.price}</li>`;
      });
      list += "</ul>";
      cartItems.innerHTML = list;
    }
  }
}
window.onload = function() {
  displayCart();
};

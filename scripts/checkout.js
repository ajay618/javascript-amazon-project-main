
const cartItems=localStorage.getItem('Cart');

let AllCart = JSON.parse(cartItems);

const length= AllCart.length;

document.querySelector('.js-items').innerHTML=`${length} items`;

let checkoutHTML='';

AllCart.forEach((CartItem) => {

    let images=CartItem.image;

    checkoutHTML+=`<div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Wednesday, June 15
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${images}">

      <div class="cart-item-details">
        <div class="product-name">
        ${CartItem.name}  
        </div>
        <div class="product-price">
          $${((CartItem.price/100)*CartItem.quantity).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${CartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>

        <div class="delivery-option">
          <input type="radio" class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
            Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" checked class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    `    
});

document.querySelector('.js-chekout-container').innerHTML=checkoutHTML;


import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
       <FiShoppingCart className="cart-icon" />
       <span className="cart-quantity">{quantity}</span>
    </div>
  );
};

export default CartWidget;




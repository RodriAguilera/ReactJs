import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); 
  };

  return (
    <div>
      <span className="cart-count numero">{cartCount}</span>
      
      <AddShoppingCartIcon color="secondary" aria-label="add to shopping cart" onClick={handleAddToCart}/>
    </div>
  );
};


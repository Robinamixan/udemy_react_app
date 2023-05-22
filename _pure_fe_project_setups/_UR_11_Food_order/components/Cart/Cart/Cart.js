import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.css';
import Popup from '../../UI/Popup/Popup';
import CartContext from '../../../store/cart-context';
import CartItem from '../CartItem/CartItem';

Cart.propTypes = {
  onCartHide: PropTypes.func
};

function Cart(props) {
  const cartContext = React.useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  };

  const removeCardItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = cartContext.items.map(item => (
      <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCardItemHandler.bind(null, item.id)}
      />
  ));

  return (
      <Popup onBackdropClick={props.onCartHide}>
        <ul className={styles['cart-items']}>
          {cartItems}
        </ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button
              className={styles['button--alt']}
              onClick={props.onCartHide}
          >Close</button>
          {hasItems && <button className={styles.button}>Order</button>}
        </div>
      </Popup>
  );
}

export default Cart;
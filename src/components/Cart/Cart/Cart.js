import React from 'react';

import styles from './Cart.module.css';
import Popup from '../../UI/Popup/Popup';

function Cart() {
  const items = [{id:'g1', name: 'Sushi', amount: 2, price: 12.99}];
  const cartItems = items.map(item => {
    return <li>{item.name}</li>;
  });

  return (
      <Popup>
        <ul className={styles['cart-items']}>
          {cartItems}
        </ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles.actions}>
          <button className={styles['button--alt']}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </Popup>
  );
}

export default Cart;
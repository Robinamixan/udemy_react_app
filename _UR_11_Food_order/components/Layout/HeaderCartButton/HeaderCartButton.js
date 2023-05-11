import React from 'react';
import PropTypes from 'prop-types';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

HeaderCartButton.propTypes = {
  onClick: PropTypes.func
};

function HeaderCartButton(props) {
  const [isButtonHighlighted, setIsButtonHighlighted] = React.useState(false);
  const cartContext = React.useContext(CartContext);
  const {items} = cartContext;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${isButtonHighlighted ? styles.bump : ''}`;

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
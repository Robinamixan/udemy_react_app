import React from 'react';
import PropTypes from 'prop-types';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const REDUCE_INITIAL_INDEX = 0;
const BUTTON_HIGHLIGHT_DELAY = 300;

HeaderCartButton.propTypes = {
    onClick: PropTypes.func,
};

function HeaderCartButton(props) {
    const [isButtonHighlighted, setIsButtonHighlighted] = React.useState(false);
    const cartContext = React.useContext(CartContext);
    const { items } = cartContext;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, REDUCE_INITIAL_INDEX);

    const buttonClasses = `${styles.button} ${isButtonHighlighted
        ? styles.bump
        : ''}`;

    React.useEffect(() => {
        if (!items.length) {
            return;
        }

        setIsButtonHighlighted(true);
        const timer = setTimeout(() => {
            setIsButtonHighlighted(false);
        }, BUTTON_HIGHLIGHT_DELAY);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.css';
import Popup from '../../UI/Popup/Popup';
import CartContext from '../../../store/cart-context';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout.js';

const PRICE_FRACTION_DIGITS = 2;

Cart.propTypes = {
    onCartHide: PropTypes.func,
};

function Cart(props) {
    const cartContext = React.useContext(CartContext);

    const [isCheckout, setIsCheckout] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isDidSubmit, setIsDidSubmit] = React.useState(false);

    const totalAmount = `$${cartContext.totalAmount.toFixed(
        PRICE_FRACTION_DIGITS)}`;
    const hasItems = !!cartContext.items.length;

    const addCartItemHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 });
    };

    const removeCardItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('http://localhost:8080/orders', {
            method: 'POST',
            body: JSON.stringify({
                userData: userData,
                items: cartContext.items,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setIsSubmitting(false);
        setIsDidSubmit(true);

        cartContext.clearCart();
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

    const cartActions = (
        <div className={styles.actions}>
            <button
                className={styles['button--alt']}
                onClick={props.onCartHide}
            >Close</button>
            {hasItems && <button
                className={styles.button}
                onClick={orderHandler}
                disabled={isSubmitting}
            >Order</button>}
        </div>
    );

    const cartPopupContent = (
        <React.Fragment>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCartHide={props.onCartHide}
                                     onConfirm={submitOrderHandler} />}
            {!isCheckout && cartActions}
        </React.Fragment>
    );

    const submittingMessage = <p>Submitting form data</p>;
    const submitMessage = (
        <React.Fragment>
            <p>We did submit your data</p>
            <div className={styles.actions}>
                <button
                    className={styles['button--alt']}
                    onClick={props.onCartHide}
                >
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Popup onBackdropClick={props.onCartHide}>
            {!isSubmitting && !isDidSubmit && cartPopupContent}
            {isSubmitting && !isDidSubmit && submittingMessage}
            {!isSubmitting && isDidSubmit && submitMessage}
        </Popup>
    );
}

export default Cart;
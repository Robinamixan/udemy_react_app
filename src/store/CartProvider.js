import React from 'react';
import PropTypes from 'prop-types';

import CartContext from './cart-context';

const ADD_ITEM_ACTION = 'ADD_ITEM';
const REMOVE_ITEM_ACTION = 'REMOVE_ITEM';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM_ACTION) {
    const item = action.item;

    const itemTotalAmount = item.price * item.amount;
    const cartTotalAmount = state.totalAmount + itemTotalAmount;

    const existItemIndex = state.items.findIndex((existItem) => {
      return existItem.id === item.id;
    });

    let cartItems;
    if (state.items[existItemIndex]) {
      cartItems = [...state.items];
      cartItems[existItemIndex].amount += item.amount;
    } else {
      cartItems = state.items.concat(item);
    }

    return {
      items: cartItems,
      totalAmount: cartTotalAmount
    };
  }

  if (action.type === REMOVE_ITEM_ACTION) {
    const existItemIndex = state.items.findIndex((existItem) => {
      return existItem.id === action.itemId;
    });

    let cartItems = [...state.items];

    const existItem = cartItems[existItemIndex];
    const cartTotalAmount = state.totalAmount - existItem.price;

    cartItems[existItemIndex].amount -= 1;
    if (cartItems[existItemIndex].amount === 0) {
      cartItems = cartItems.filter(item => item.id !== action.itemId);
    }

    return {
      items: cartItems,
      totalAmount: cartTotalAmount
    };
  }

  return defaultCartState;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = React.useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({type: ADD_ITEM_ACTION, item: item});
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({type: REMOVE_ITEM_ACTION, itemId: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
  );
}

export default CartProvider;
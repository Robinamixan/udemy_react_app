import React, { useState } from 'react';

import Header from './components/Layout/Header/Header.js';
import MealsList from './components/Meals/MealsList/MealsList.js';
import Cart from './components/Cart/Cart/Cart.js';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onCartHide={hideCartHandler} />}
            <Header onCartShow={showCartHandler} />
            <main>
                <MealsList />
            </main>
        </CartProvider>
    );
}

export default App;

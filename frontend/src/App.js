import React, { useState } from 'react';

import Header from './components/Layout/Header/Header.js';
import Meals from './components/Meals/MealsList/MealsList.js';
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
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;

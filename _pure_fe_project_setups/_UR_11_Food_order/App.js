import React from 'react';

import Header from './components/Layout/Header/Header';
import MealsContent from './components/Meals/MealsContent/MealsContent';
import Cart from './components/Cart/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onCartHide={hideCartHandler}/>}
      <Header onCartShow={showCartHandler}/>
      <main>
        <MealsContent/>
      </main>
    </CartProvider>
  );
}

export default App;

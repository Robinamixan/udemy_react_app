import React from 'react';

import Header from './components/Layout/Header/Header';
import MealsContent from './components/Meals/MealsContent/MealsContent';
import Cart from './components/Cart/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <main>
        <MealsContent/>
      </main>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/Counter/Counter.js';
import store from './store/index.js';
import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Auth />
            <Counter />
        </Provider>
    );
}

export default App;

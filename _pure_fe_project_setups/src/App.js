import React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/Counter/Counter.js';
import store from './store/index.js';

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default App;

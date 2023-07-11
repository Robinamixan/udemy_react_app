import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter/Counter.js';
import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';
import UserProfile from './components/UserProfile/UserProfile.js';

function App() {
    const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <UserProfile />}
            <Counter />
        </Fragment>
    );
}

export default App;

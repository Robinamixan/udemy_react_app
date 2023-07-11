import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        authSlice: authSlice.reducer
    }
});



export default store;

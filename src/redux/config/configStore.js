import { configureStore } from '@reduxjs/toolkit';
import subscriber from '../modules/subscriberSlice';
const store = configureStore({
    reducer: {
        subscriber,
    },
});
export default store;

import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from '../features/hotels/hotelsSlice.js';

export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
    },
});

import { configureStore } from '@reduxjs/toolkit';
//reducers
import items from './slices/items';

export default configureStore({
    reducer: {
        items
    }
});


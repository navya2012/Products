import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from '../Slices/cartSlice'

//Combine reducers
const rootReducer = combineReducers({
    cartList : cartReducer
    // Add other reducers if any
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const myStore = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(myStore);

// const myStore = configureStore({ 
//     reducer: {
//         counter : counterReducer,
//         cart : cartReducer
//     } 

// })


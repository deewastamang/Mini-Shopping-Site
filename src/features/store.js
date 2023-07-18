import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import loginSlice from "./slice/loginSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducers = combineReducers({
    logIn: loginSlice,
    cart: cartSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
})

export default store;
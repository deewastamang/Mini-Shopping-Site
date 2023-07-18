import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    total : 0,
    amount : 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart : (state) => {
            state.cartItems = [];
        },
        addItem : (state, {payload}) => {
            state.cartItems.push(payload)
        },
        removeItem: (state, {payload: id}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== id)
        },
        increase: (state, {payload}) => {
            const item = state.cartItems.find(item => item.id === payload);
            item.amount += 1;
        },
        decrease: (state, {payload}) => {
            const item = state.cartItems.find(item => item.id === payload);
            item.amount -= 1;
        },
        calculateTotal : (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            } )
            state.amount = amount;
            state.total = total;
        }
    }
})

export const {clearCart, addItem, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;
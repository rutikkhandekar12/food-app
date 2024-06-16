
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers:{
        addCart: (state, action) =>{
            state.cartItems.push(action.payload);
        },
        removeCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },

        clearAllCart: () =>{
            state.cartItems = []
        }
    }
})

export const {addCart, removeCart, clearAllCart} = cartSlice.actions;

export default cartSlice.reducer; 
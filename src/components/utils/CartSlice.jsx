import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state,action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id)
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
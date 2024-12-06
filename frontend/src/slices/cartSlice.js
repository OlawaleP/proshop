import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItem: []};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItem.find((x) => x._id === item._id);

            if (existItem) {
                state.cartItem = state.car
            }
        }
    }
});

export default cartSlice.reducer;
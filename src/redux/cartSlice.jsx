import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state, action) {

            const productIsAlreadyInCart = state.some(
                (product) => product.id === action.payload.id);

            if (productIsAlreadyInCart) {
                return
            }

            state.push(action.payload)
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }

    }
});

export const { add, remove, sum } = cartSlice.actions;
export default cartSlice.reducer;
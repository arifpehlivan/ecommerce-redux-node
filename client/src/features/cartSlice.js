import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartQuantity: 0,
    cartAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
            } else{
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        removeFromCart(state,action){
            const newCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = newCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
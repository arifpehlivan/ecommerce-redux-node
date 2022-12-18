import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    // localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) :
    status: null
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getOrder(state, action) {
            state.orderItems.push(action.payload);
            localStorage.setItem("orders", state.orderItems);
        },
    }
})

export const { getOrder } = orderSlice.actions;

export default orderSlice.reducer;
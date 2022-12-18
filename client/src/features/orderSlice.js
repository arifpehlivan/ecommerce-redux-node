import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    // localStorage.getItem("orderItems") ? JSON.parse(localStorage.getItem("orderItems")) :
    status: null
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getOrder(state, action) {
            state.orderItems.push(action.payload);
            localStorage.setItem("order", state.orderItems);
        },
    }
})

export const { getOrder } = orderSlice.actions;

export default orderSlice.reducer;
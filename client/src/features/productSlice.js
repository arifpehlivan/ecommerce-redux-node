import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct(state,action){
            state.items.push(action.payload)
            console.log("add");
            localStorage.setItem("items", JSON.stringify(state.items))
        }
        
    }
})

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer
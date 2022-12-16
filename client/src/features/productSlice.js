import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct(state, action) {
            state.items.push(action.payload)
            console.log("add");
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        deleteProduct(state, action) {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    const nextCartItems = state.items.filter(
                        (productItem) => productItem.id !== item.id
                    );
                    state.items = nextCartItems;
                }
                localStorage.setItem("items", JSON.stringify(state.items));
                return state;
            });
        }

    }
})

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer
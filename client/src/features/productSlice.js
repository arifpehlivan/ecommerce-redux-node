import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
    discountInput: 0
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
        },
        applyPrice(state,action){
            state.discountInput = action.payload;
        },
        discountPrice(state,action){
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            state.items[itemIndex].price = state.discountInput;
            // state.items.map((item) => {
            //     if (item.id === action.payload.id) {
            //         item.price = state.items[itemIndex].discountInput;
            //     }
                
            // })
            localStorage.setItem("items", JSON.stringify(state.items));
                return state;
        }

    }
})

export const { addProduct, deleteProduct, discountPrice, applyPrice } = productsSlice.actions;

export default productsSlice.reducer
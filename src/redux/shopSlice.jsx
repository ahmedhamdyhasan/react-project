import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productsData.push(action.payload);
      }
    },
    increamentQuantity: (state, action) => {
        const item = state.productsData.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity++;
        }
      },
    decrementQuantity: (state, action) => {
        const item = state.productsData.find(
          (item) => item.id === action.payload.id
        );
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      },
      deleteItem: (state, action) => {
        state.productsData = state.productsData.filter(
          (item) => item.id !== action.payload
        );
      },
      clearCartItems: (state) => {
        state.productsData = [];
      },

  },
});
export const { addToCart,increamentQuantity,decrementQuantity,deleteItem,clearCartItems } = shopSlice.actions;
export default shopSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload;
      // The product listing permits one initial add; quantities can grow in Cart.
      if (!state.items.some(item => item.id === id)) {
        state.items.push({ id, quantity: 1 });
      }
    },
    incrementItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter(entry => entry.id !== action.payload);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export default cartSlice.reducer;

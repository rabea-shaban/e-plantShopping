import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, { payload }) {
      const existing = state.items.find(i => i.id === payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart(state, { payload }) {
      state.items = state.items.filter(i => i.id !== payload);
    },
    increaseQuantity(state, { payload }) {
      const item = state.items.find(i => i.id === payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, { payload }) {
      const item = state.items.find(i => i.id === payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(i => i.id !== payload);
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

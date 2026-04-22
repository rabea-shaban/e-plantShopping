import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      const existing = state.items.find(i => i.id === payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(i => i.id !== payload);
    },
    updateQuantity(state, { payload }) {
      const item = state.items.find(i => i.id === payload.id);
      if (item) {
        if (payload.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== payload.id);
        } else {
          item.quantity = payload.quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

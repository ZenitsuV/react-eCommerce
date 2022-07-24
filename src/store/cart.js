import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0, favouriteItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        favouriteItems: state.favouriteItems,
      };
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingCartItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        favouriteItems: state.favouriteItems,
      };
    },
    addFavouriteItem(state, action) {
      let updatedFavouriteItem = [];
      updatedFavouriteItem.push({
        id: action.payload,
      });
      return {
        items: state.items,
        totalAmount: state.totalAmount,
        favouriteItems: updatedFavouriteItem,
      };
    },
    removeFavouriteItem(state, action) {
      let updatedFavouriteItem = state.favouriteItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        items: state.items,
        totalAmount: state.totalAmount,
        favouriteItems: updatedFavouriteItem,
      };
    },
    clearCart(state) {
      return {
        items: [],
        totalAmount: 0,
        favouriteItems: state.favouriteItems,
      };
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

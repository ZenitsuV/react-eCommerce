import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload is a default name in redux toolkit
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;

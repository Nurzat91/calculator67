import {configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from '../Calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;



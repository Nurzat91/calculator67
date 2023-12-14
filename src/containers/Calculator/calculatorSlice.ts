import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: number;
  result: number;
}

const initialState: CalculatorState = {
  value: 0,
  result: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    task: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<number>) => {
      state.result += action.payload;
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.result -= action.payload;
    },
    multiply: (state, action: PayloadAction<number>) => {
      state.result *= action.payload;
    },
    divide: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        state.result /= action.payload;
      } else {
        state.result = 0; // Обработка деления на ноль
      }
    },
    remove: (state) => {
      state.value = 0;
      state.result = 0;
    },
    answerResult: (state) => {
      state.result = state.value as number;
    },
  },
});

export const {
  task,
  add,
  subtract,
  multiply,
  divide,
  remove,
  answerResult,
} = calculatorSlice.actions;

export const calculatorReducer = calculatorSlice.reducer;

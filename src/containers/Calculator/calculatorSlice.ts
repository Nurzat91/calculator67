import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState{
  value: string;
  result: string;
}

const initialState: CalculatorState = {
  value: '',
  result: '',
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    task: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    remove: (state) => {
      state.value = '';
      state.result = '';
    },
    answerResult: (state) => {
      try {
        state.result = eval(state.value);
      } catch (error) {
        state.result = 'Error';
      }
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {task, remove, answerResult} = calculatorSlice.actions;
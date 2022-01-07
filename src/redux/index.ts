import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../hooks";
import type { RootState } from "../store";
import { ApiDataType } from "../constants/types";

interface State {
  value: number;
  isLoading: boolean;
  data: ApiDataType[];
  page: number;
  errorMessage?: string;
  error: boolean;
}

const initialState: State = {
  value: 0,
  isLoading: false,
  data: [],
  page: 1,
  error: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    handleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    handleDataChange: (state, action: PayloadAction<ApiDataType[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    handleError: (
      state,
      action: PayloadAction<{ message?: string; error: boolean }>
    ) => {
      state.error = action.payload.error;
      state.errorMessage = action.payload.message;
    },
  },
});

export const {
  incrementPage,
  decrement,
  incrementByAmount,
  handleLoading,
  handleDataChange,
  handleError,
} = commonSlice.actions;

export default commonSlice.reducer;

export const useStore = () => {
  const state = useAppSelector((state) => state.common);
  return state;
};

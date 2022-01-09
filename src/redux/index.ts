import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { ApiDataType, Status } from "../constants/types";

interface State {
  value: number;
  status: Status;
  data: ApiDataType[];
  page: number;
  errorMessage?: string;
  likedImages: string[];
}

const initialState: State = {
  value: 0,
  status: "idle",
  data: [],
  page: 0,
  likedImages: [],
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    handlePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    handleStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    handleDataChange: (state, action: PayloadAction<ApiDataType[]>) => {
      state.data.push(...action.payload);
    },
    handleError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.errorMessage = action.payload;
    },
    handleLikedImages: (state, action: PayloadAction<string[]>) => {
      state.likedImages = action.payload;
    },
  },
});

export const {
  incrementPage,
  handleStatus,
  handleDataChange,
  handleError,
  handleLikedImages,
  handlePage,
} = commonSlice.actions;

export default commonSlice.reducer;

export const useStore = () => {
  return useAppSelector((state) => state.common);
};

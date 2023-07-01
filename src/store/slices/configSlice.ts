import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConfigState {
  backgroundImage: string;
}

const initialState: ConfigState = {
  backgroundImage: "",
};

export const counterSlice = createSlice({
  name: "[CONFIG]",
  initialState,
  reducers: {
    setBackgroundImage: (state: ConfigState, action: PayloadAction<string>) => {
      state.backgroundImage = action.payload;
    },
  },
});

export const { setBackgroundImage } = counterSlice.actions;

export const configReducer = counterSlice.reducer;

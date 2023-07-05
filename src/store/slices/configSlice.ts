import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConfigState {
  backgroundImage: string;
  isIntelliHideDock: boolean;
}

const initialState: ConfigState = {
  backgroundImage: "",
  isIntelliHideDock: false,
};

export const counterSlice = createSlice({
  name: "[CONFIG]",
  initialState,
  reducers: {
    patchSettings: (state: ConfigState, action: PayloadAction<Partial<ConfigState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { patchSettings } = counterSlice.actions;
export const configReducer = counterSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICustomPage } from "../../interfaces";
import { RootState } from "../store";

const initialState = {
  items: [] as ICustomPage[],
};

export const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addPage: (state, action: PayloadAction<ICustomPage>) => {
      state.items.push(action.payload);
    },
  },
});
export const { addPage } = pageSlice.actions;

export const pagesSelector = (state: RootState) => state.pages.items;

export default pageSlice.reducer;
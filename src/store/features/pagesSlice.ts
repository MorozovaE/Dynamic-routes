import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { ICustomPage } from "../../interfaces";
import { RootState } from "../store";
import { previewPage } from "../../testData";

const initialState = {
  items: [previewPage] as ICustomPage[],
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

const pagesState = (state: RootState) => state.pages;
export const selectPages = createSelector(pagesState, (s) => s.items);

export default pageSlice.reducer;

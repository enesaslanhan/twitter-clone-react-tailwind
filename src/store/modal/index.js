import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal:false
};
const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal=action.payload;
    },
    _removeModal: (state) => {
      state.modal=false
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});
export const { _setModal, _removeModal} = modal.actions;
export default modal.reducer;

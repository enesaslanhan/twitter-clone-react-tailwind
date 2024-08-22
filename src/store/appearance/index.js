import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
 backgroundColor:{
    name:"dark",
    primary:"#000",
    secondary:"#16181c",
    third:"#273340",
    modal:"#5b708366"
  },
  color:{
    primary:"#1d9bf0",
    secondary:"#8ecdf8",
    third:"#e7e9ea",
    baseSecondary:"#71767b"
  },
  fontsize:16,
  boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',

  /*
  backgroundColor:{
    name:"light",
    primary:"#15202b",
    secondary:"#1e2732",
    third:"#273340",
    modal:"#5b708366"
  },
  color:{
    primary:"#1d9bf0",
    secondary:"#8ecdf8",
    third:"#f7f9f9",
    baseSecondary:"#8b98a5"
  },
  	boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
  fontsize:16
   */
  /*
  backgroundColor:{
    name:"default",
    primary:"#fff",
    secondary:"#f7f9f9",
    third:"#eff3f4",
    modal:"#00000066"
  },
  color:{
    primary:"#1d9bf0",
    secondary:"#8ecdf8",
    third:"#0f1419",
    baseSecondary:"#535471"
  },
  fontsize:16,
  boxShadow:"rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px"
  */
};
const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor=action.payload;
    },
    _setColor: (state, action) => {
      state.color = action.payload;
    },
    _setFontSize: (state, action) => {
      state.fontsize = action.payload;
    },
  },
});
export const {  _setBackgroundColor, _setColor,_setFontSize} = appearance.actions;
export default appearance.reducer;

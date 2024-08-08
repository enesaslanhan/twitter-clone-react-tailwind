import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "Enes__Aslanhan",
    fullname: "Enes",
    avatar:
      "https://pbs.twimg.com/profile_images/1806625129285263360/WGwoKhVR_normal.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "Enes__Aslanhan",
      fullname: "Enes",
      avatar:
        "https://pbs.twimg.com/profile_images/1806625129285263360/WGwoKhVR_normal.jpg",
    },
    {
      id: 2,
      username: "Coder_Zyrok",
      fullname: "Zyrok",
      avatar:
        "https://yt3.ggpht.com/Q5PcIE3T9i4j0IdEddQNB888oI8iQpvcV6SG40c5RbLTNpiwJw_RhwTwKn6yrk563YzWebXBwQ=s88-c-k-c0x00ffffff-no-rj",
    },
  ],
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id != action.payload
      );
      if (state.currentAccount && action.payload == state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});
export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;

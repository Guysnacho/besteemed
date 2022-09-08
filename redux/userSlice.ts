import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabaseClient";
import { RootState } from "./store";

export interface userState {
  user?: User;
  session?: Session;
}

//Setup database interface
export interface dbReqs {}

var initialState: userState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      //Set state
      state = action.payload;
    },
    logout: (state) => {
      state = {};
      supabase.auth.signOut();
    },
  },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

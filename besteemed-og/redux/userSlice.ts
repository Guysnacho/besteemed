import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabaseClient";
import { RootState } from "./store";

export interface userState {
  user?: User;
  name?: string;
  session?: Session;
}

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
      state = { name: "" };
      supabase.auth.signOut();
    },
    refreshuser: (state, action: PayloadAction<userState>) => {
      state = action.payload;
    },
  },
});

export const { login, logout, refreshuser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

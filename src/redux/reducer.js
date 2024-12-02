import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: {
    details: "",
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        details: action.payload,
      };
    },
  },
});

export const { login } = users.actions;

export default users.reducer;

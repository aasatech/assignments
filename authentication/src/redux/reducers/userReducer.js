import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    userRegester: (state, action) => {
      state.users.push(action.payload);
    },

    userLogin: (state, action) => {
        state.users.push(action.payload);
    }
  }
})

export const { userRegester, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
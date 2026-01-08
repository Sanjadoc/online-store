import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserLogout(state) {
      state.user = null;
    }
  }
});

export const { setUser, setUserLogout } = userSlice.actions;

export default userSlice;

export const selectorUser = ({ user }) => user;

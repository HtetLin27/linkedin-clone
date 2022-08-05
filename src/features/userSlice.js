import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  reducers: {
    login: (state,action) => {
     
      state.user = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state, action) => {
      state.user = null;
    },
  },

});

export const { login,logout} = userSlice.actions;

//Select
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;

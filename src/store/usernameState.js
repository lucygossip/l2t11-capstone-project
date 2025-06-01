import { createSlice, current } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "Username",
  initialState: {
    value: "",
    username: ""
  },
  reducers: {
    changeInputValue: (state, action) => {
      state.value = action.payload;
      console.log(current(state));
    },
    setUsername: (state, action) => {
        state.username = action.payload;
        console.log(current(state));
    },
    clearUserName: (state) => {
      state.username = ""
      console.log(current(state));
    }
  },
});

export const { changeInputValue, setUsername, clearUserName } = usernameSlice.actions;
//Export the reducer function to be used in the store
export default usernameSlice.reducer;

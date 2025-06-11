import { createSlice } from "@reduxjs/toolkit";

/* Create slice for username state */
const usernameSlice = createSlice({
  name: "Username",
  initialState: {
    value: "",
    username: ""
  },
  reducers: {
    changeInputValue: (state, action) => { // Change input value
      state.value = action.payload;
      //console.log(current(state));
    },
    setUsername: (state, action) => { // Set username
        state.username = action.payload;
        //console.log(current(state));
    },
    clearUserName: (state) => { // Clear username
      state.username = ""
      //console.log(current(state));
    }
  },
});

export const { changeInputValue, setUsername, clearUserName } = usernameSlice.actions;
//Export the reducer function to be used in the store
export default usernameSlice.reducer;

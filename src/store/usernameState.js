const usernameSlice = createSlice({
name: 'Username',
initialState: {
value: "",
},
reducers: {
//This function will set the username of the user
setUsername: (state, action) => {
state.value = action.payload;
}
},
});

export const { setUsername } =
counterSlice.actions
//Export the reducer function to be used in the store
export default usernameSlice.reducer
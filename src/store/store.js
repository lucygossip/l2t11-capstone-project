import { configureStore } from "@reduxjs/toolkit";
import usernameState from "./usernameState";

const store = configureStore({
reducer: {
username: usernameState
// ...more reducers can be added here.
},
// other store option
/*
middleware: [],
devTools: process.env.NODE_ENV !== 'production' */
});
export default store;
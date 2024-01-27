// This JavaScript code is using the Redux Toolkit
// library to define a Redux slice for managing user-related state in a Redux store.

// Importing dependencies
import { createSlice } from "@reduxjs/toolkit";
// This line 5 imports the createSlice function from
// the Redux Toolkit library. createSlice() is a utility
// function that helps simplify the process of defining a Redux slice.

// Initial state
const initialState = {
  user: null,
};
// Here, the initial state for the userSlice is defined.
// The userSlice is expected to manage a piece of the
// Redux store's state, and the initial state has a
// property called user initialized to null.

// Creating a Redux slice
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});
// The createSlice function is invoked to create a
// Redux slice named "user". This slice has a set of
// initial state (initialState) and a set of reducer
// functions (login and logout). Reducers are functions
// that specify how the state should change in response
// to certain actions. In this case, login sets the user
// property in the state to the payload of the action,
// and logout sets it to null.

// Exporting actions
export const { login, logout } = userSlice.actions;
// The createSlice function returns an object that contains
// the generated action creators. This line extracts the
// login and logout action creators for use in other parts
// of the application.

// Selector function
export const selectUser = state => state.user.user;
// This exports a selector function named selectUser.
// Selectors are used to extract specific values of state
// from the Redux store. In this case, the selectUser selector
// is designed to retrieve the user property from the userSlice state.
// Selectors can also be defined inline where they are used
// instead of in the slice file e.g. useSelector(state => state.user.value).

// Exporting the reducer
export default userSlice.reducer;
// This line exports the reducer function generated
// by createSlice. The reducer is responsible for
// handling actions and updating the state accordingly.

// In summary, this code defines a Redux slice for managing
// user-related state in a Redux store. It provides action
// creators (login and logout), a selector function (selectUser),
// and a reducer function. This structure is beneficial for
// organizing and managing the user state within a larger Redux application.

// Read up on prop drilling

// This way is production-level stuff and is better than using React Hooks like
// useState and useEffect.

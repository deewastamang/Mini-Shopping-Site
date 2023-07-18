import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoggedIn: false,
}

const logInSlice = createSlice({
    name: 'logInStatus',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
        },
        addUser: (state, {payload}) => {
            let newUser = {
                name: payload.name,
                email: payload.email,
                password: payload.password
            };
            state.users.push(newUser)
        }
    }
})

export const {logIn, logOut, addUser} = logInSlice.actions;
export default logInSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'

const initialAuthState = {
    isAuthenticated: false,
    accessToken:null,
}


const authSlice = createSlice({
    name:"auth",
    initialState:initialAuthState,
    reducers:{
        setToken(state, action) {
            state.accessToken = action.payload.token;
            // localStorage.setItem(JSON.stringify(""))
        },
        removeToken(state) {
            state.accessToken = null;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

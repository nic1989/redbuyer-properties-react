import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: 0
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

export default authSlice.reducer;
export const { setLogin } = authSlice.actions;
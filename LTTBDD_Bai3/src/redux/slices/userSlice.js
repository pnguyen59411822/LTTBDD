import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'username'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.name = action.payload.name;
        }
    }
});

// Export actions
export const { setUsername: setUser } = userSlice.actions;

// Export selectors
export const selectUsername = (state) => state.name;

// Export reducer
export default userSlice.reducer;
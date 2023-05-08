import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./user-operations";

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilled = (state, {payload}) => {
    state.isLoading = false
    state.items = payload
    state.error = null
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.error = payload
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {items: [], isLoading: false, error: null},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, handlePending)
            .addCase(fetchUsers.fulfilled, handleFulfilled)
            .addCase(fetchUsers.rejected, handleRejected)
    }
});

export default usersSlice.reducer;
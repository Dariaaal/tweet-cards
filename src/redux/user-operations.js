import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6458f3308badff578effa66a.mockapi.io';

export const fetchUsers = createAsyncThunk(
    'users/getUsers', 
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/users`);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
},
);
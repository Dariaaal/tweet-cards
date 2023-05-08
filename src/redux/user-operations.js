import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6458f3308badff578effa66a.mockapi.io';

export const fetchUsers = createAsyncThunk(
    'cards/getCards', 
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/cards`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
},
);
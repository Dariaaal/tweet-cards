import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6458f3308badff578effa66a.mockapi.io';
axios.defaults.params = {
    limit: 3,
  };

export const fetchUsers = createAsyncThunk(
    'cards/getCards', 
    async (page, { rejectWithValue }) => {
        const config = {
            params: {
              page: page,
            }}
        try {
            const res = await axios.get(`/cards`, config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
},
);
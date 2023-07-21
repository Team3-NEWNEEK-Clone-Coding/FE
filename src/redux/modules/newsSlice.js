import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hasMoreNews: true,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;

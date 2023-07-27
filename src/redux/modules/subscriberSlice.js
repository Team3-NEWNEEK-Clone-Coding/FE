import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    subscriber: 0,
};
const subscriberSlice = createSlice({
    name: 'subscriber',
    initialState,
    reducers: {
        subscriberSub: (state, action) => {
            state.subscriber = action.payload;
        },
    },
});
export const { subscriberSub } = subscriberSlice.actions;
export default subscriberSlice.reducer;

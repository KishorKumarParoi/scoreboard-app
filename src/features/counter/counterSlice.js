import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
    {
        id: 1,
        value: 6,
    },
    {
        id: 2,
        value: 7,
    },
    {
        id: 3,
        value: 8,
    },
];


const counterSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex((counter) => counter.id === action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex((counter) => counter.id === action.payload);
            state[counterIndex].value--;
        },
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
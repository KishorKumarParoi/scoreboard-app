import { createSlice } from "@reduxjs/toolkit";
import idGenerator from '../../utils/idGenerator';

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
            state[counterIndex].value = Math.max(0, state[counterIndex].value - 1);
        },
        addCounter: (state) => {
            state.push({
                id: idGenerator(state) + 1,
                value: 0,
            });
        },
        reset: (state) => {
            state.forEach((counter) => {
                counter.value = 0;
            });
        },
        deleteCounter: (state, action) => {
            return state.filter((counter) => counter.id !== action.payload);
        },
    }
});

export const { increment, decrement, addCounter, reset, deleteCounter } = counterSlice.actions;
export default counterSlice.reducer;
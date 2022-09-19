import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = {
    count: 0,

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        increas: (state, actions) => {
            state.count += actions.payload
        }
    }
})



export const { increment, decrement, increas } = counterSlice.actions;

export default counterSlice.reducer;
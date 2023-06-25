import { createSlice } from "@reduxjs/toolkit";

// use createSlice for the creation of state
const quoteSlice = createSlice({
    name:'quotes',
    initialState:{
        quotes:[]
    },
    reducers:{
        setQuotes(state , action){
            state.quotes = action.payload
        }
    }
})

// Import reducers functions for use this in file .jsx with useDispatch
export const quotesActions = quoteSlice.actions

// Export quoteSlice for use this in UseDispatch methods
export default quoteSlice
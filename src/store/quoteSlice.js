import { createSlice } from "@reduxjs/toolkit";

// use createSlice for the creation of state
const quoteSlice = createSlice({
    name:'quotes',
    initialState:{
        quotes:[],
        quote:'',
        quoteAuthor:''
    },
    reducers:{
        setQuotes(state , action){
            state.quotes = action.payload

            // Random number 
            const rn = Math.floor(Math.random() * state.quotes.length)

            // Quote 
            state.quote = state.quotes[rn].text
            // Author of quote
            state.quoteAuthor = state.quotes[rn].author 
        },
        generateQuote(state , action){
            // Generate a number between 0 and the length of quotes length.
            const lengthQuotes = state.quotes.length
            // console.log('Length :', lengthQuotes)

            // Random number
            const randomNumber = Math.floor(Math.random() * lengthQuotes)
            console.log("Random number generate", randomNumber)

            // quote
            state.quote = state.quotes[randomNumber].text
            // quote author
            state.quoteAuthor = state.quotes[randomNumber].author

            // console.log quote 
            // console.log(state.quote)
            // console.log(state.quoteAuthor)
        }
    }
})

// Import reducers functions for use this in file .jsx with useDispatch
export const quotesActions = quoteSlice.actions

// Export quoteSlice for use this in UseDispatch methods
export default quoteSlice
import { createSlice } from "@reduxjs/toolkit";

// use createSlice for the creation of state
const quoteSlice = createSlice({
    name:'quotes',
    initialState:{
        quotes:[],
        colors:['#068DA9','#2C3333','#183A1D','#88A47C','#27374D','#482121','#B04759','#394867','#643A6B','#4F200D'],
        color:'#B04759',
        quote:'',
        quoteAuthor:'',
        changeLanguage:false,
        sourceLanguage:'EN',
        targetLanguage:''
    },
    reducers:{
        setQuotes(state , action){

            // random number color
            // const rnColor = Math.floor(Math.random() * state.colors.length)
            // // give a color for background
            // state.color = state.colors[rnColor]

            state.quotes = action.payload

            // Random number 
            const rn = Math.floor(Math.random() * state.quotes.length)

            // Quote 
            state.quote = state.quotes[rn].text
            // Author of quote
            state.quoteAuthor = state.quotes[rn].author 

            console.log('background',state.color)
        },
        setQuote(state , action){
            state.quote = action.payload
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

            // random number color
            const rnColor = Math.floor(Math.random() * state.colors.length)
            // give a color for background
            state.color = state.colors[rnColor]

            console.log('background',state.color)
            // console.log quote 
            // console.log(state.quote)
            // console.log(state.quoteAuthor)
        },
        changeLanguage(state , action){
            state.changeLanguage = true
            console.log("params",action.payload)
            state.targetLanguage = action.payload
        },
        denyChangeLanguage(state , action){
            state.changeLanguage = false;

            // return state.changeLanguage;
        }
    }
})

// Import reducers functions for use this in file .jsx with useDispatch
export const quotesActions = quoteSlice.actions

// Export quoteSlice for use this in UseDispatch methods
export default quoteSlice
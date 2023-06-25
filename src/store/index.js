import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quoteSlice";

const store = configureStore({
    reducer:{
        quotes: quoteSlice.reducer
    }
})

export default store
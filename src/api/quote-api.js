import axios from "axios";

export const apiQuote = axios.create({
    baseURL:"https://type.fit/api/quotes"
})
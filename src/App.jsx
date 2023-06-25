import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { apiQuote } from './api/quote-api'
import quoteSlice, { quotesActions } from './store/quoteSlice'


function App() {
  const [count, setCount] = useState(0)

  // use hook useDispatch for execute 
  const dispatch = useDispatch()

  const quotes = useSelector(state => state.quotes)
  console.log('Quotes',quotes)

  const getQuotes = async () =>{
    await apiQuote.get()
      .then((data) =>{
        dispatch(quotesActions.setQuotes(data.data))
    })
  }

  useEffect(() =>{
    const getQuotesApi = async () =>{
      await getQuotes()
    }

    getQuotesApi();
  } , [])
  
  return (
    <>
      <div>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

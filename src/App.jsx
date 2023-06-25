import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { apiQuote } from './api/quote-api'
import quoteSlice, { quotesActions } from './store/quoteSlice'
import styled from 'styled-components'
import '/src/App.css'


function App() {

  const Title = styled.h1`
    color:'white';
    font-size:55px;
    text-align:center;
  `;

  const TextQuote = styled.p`
    font-size:25px;
  `

  const BottomPart = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;

    padding-top:40px;
  `

  const ButtonGen = styled.button`
    color:white;
    font-size:20px;
    width:140px;
    height:40px;
    border:none;
    background-color:black;
    cursor:pointer;
  `

  const WrapperIconShare = styled.div`
    display:flex;
    gap:2em;
  `

  const WrapperQuote = styled.div`
    padding: 2.5em;
  `

  const [count, setCount] = useState(0)

  // use hook useDispatch for execute 
  const dispatch = useDispatch()

  const quotes = useSelector(state => state.quotes)
  console.log('Quotes',quotes)

  // Get array of Quotes
  const getQuotes = async () =>{
    await apiQuote.get()
      .then((data) =>{
        dispatch(quotesActions.setQuotes(data.data))
      }).catch(err => console.log(err))
  }

  const testGen = () =>{
    dispatch(quotesActions.generateQuote())
  }

  useEffect(() =>{
    const getQuotesApi = async () =>{
      await getQuotes()
    }

    getQuotesApi();
  } , [])
  
  return (
    <>
      <Title>Random Quotes</Title>
      <WrapperQuote id="main">
        <TextQuote id="test-quote">
          Edit <code>src/App.jsx</code> and save to test HMR
          Edit <code>src/App.jsx</code> and save to test HMR
        </TextQuote>
        
        {/* Part Bottom */}
        <BottomPart id="part-bottom">
          {/* Icon Share Block */}
          <WrapperIconShare id='icon-share'>
            <ButtonGen onClick={testGen}>
              Twitter
            </ButtonGen>
            <ButtonGen onClick={testGen}>
              Facebook
            </ButtonGen>
          </WrapperIconShare>
          
          {/* Button New Quote */}
          <ButtonGen onClick={testGen}>
            New Quote
          </ButtonGen>
        </BottomPart>
      </WrapperQuote>
    </>
  )
}

export default App

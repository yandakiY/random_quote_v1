
import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { apiQuote } from './api/quote-api'
import quoteSlice, { quotesActions } from './store/quoteSlice'
import styled from 'styled-components'
import '/src/App.css'


function App() {

  // const arrayColor = [
  //   '#068DA9','#27374D','#482121','#B04759','#643A6B','#4F200D'
  // ]

  const Title = styled.h1`
    color:'white';
    font-size:50px;
    text-align:center;
    line-height:60px;
  `;

  const TextQuote = styled.p`
    font-size:25px;
  `

  const TextQuoteAuthor = styled(TextQuote)`
    font-style:italic;
    text-align:right;
    padding-top:20px;
  `

  const BottomPart = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    padding-top:15px;
  `

  const ButtonGen = styled.button`
    color:white;
    font-size:20px;
    width:140px;
    height:40px;
    border:none;
    background-color:black;
    cursor:pointer;
    border-radius:10px;
  `

  const WrapperIconShare = styled.div`
    display:flex;
    gap:2em;
  `

  const Link = styled.a`
    border:none;
  `

  const IconShare = styled.i`
    font-size:40px;
    cursor:pointer;
  `

  const IconReload = styled(IconShare)`
    font-size:35px;
  `

  const WrapperQuote = styled.div`
    background-color:white;
    color:blueviolet;

    border-radius:10px;

    ${'' /* box-shadow: black; */}
    padding: 2.5em;

    width:370px;
    height:fit-content;
  `

  const Footer = styled.div`
    font-size:25px;
    text-align:center;
    margin-top:10px;
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
          <i style={{ fontSize: "45px" }} className="icon-quote-left"></i>
          {quotes.quote === '' ? 'Loading...' : quotes.quote}
          <TextQuoteAuthor>- {quotes.quoteAuthor === null ? 'Author unknown' : quotes.quoteAuthor}</TextQuoteAuthor>
        </TextQuote>
        
        {/* Part Bottom */}
        <BottomPart id="part-bottom">
          {/* Icon Share Block */}
          <WrapperIconShare id='icon-share'>
            <Link 
              id="link-twitter"
              target="_blank"
              href={`http://twitter.com/intent/tweet/?text="${quotes.quote}" \n\n - ${quotes.quoteAuthor}`} rel="noreferrer"
            >
              <IconShare className="icon-twitter">
                {/* Twitter */}
              </IconShare>
            </Link>
            <IconShare className="icon-facebook" onClick={testGen}>
              {/* Facebook */}
            </IconShare>
          </WrapperIconShare>
          
          {/* Button New Quote <i class="fa-sharp fa-solid fa-rotate"></i>  */}
          <IconReload className="fa-sharp fa-solid fa-rotate" onClick={testGen}>
            {/* New Quote */}
          </IconReload>
        </BottomPart>
      </WrapperQuote>
      <Footer>
        Made by Yandaki.
      </Footer>
    </>
  )
}

export default App

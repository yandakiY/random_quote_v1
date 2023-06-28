
import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { apiQuote } from './api/quote-api'
import quoteSlice, { quotesActions } from './store/quoteSlice'
import styled from 'styled-components'
import '/src/App.css'
import axios from 'axios'
import { BottomPart, Footer, IconReload, IconShare, Link, OptionLanguage, SelectLanguage, TextQuote, TextQuoteAuthor, Title, WrapperIconShare, WrapperLanguage, WrapperQuote } from './styled-components'
import QuoteDisplay from './components/QuoteDisplay'
import LanguageChoose from './components/LanguageChoose'

// // translate
//   const translate = async (quote, sourceLanguage = "EN", targetLanguage) =>{
//     const API_URL = 'https://api.mymemory.translated.net/get'

//     try{
//       const res = await axios.get(API_URL , {
//         params:{
//           q: quote,
//           langpair: `${sourceLanguage}|${targetLanguage}`,
//         }
//       })

//       const translateQuote = res.data.responseData.translatedText
//       console.log(translateQuote)
//       return translateQuote
//     }catch(e){
//       console.error('Error translating text:', e);
//       // console.log(e)
//     }
//   }

function App() {
  const [chooseSelect , setChooseSelect] = useState(false)

  const lang = [
    {id:'EN' , source:'en' , target:'fr' , value:'ENGLISH'},
    {id:'FR' , source:'en' , target:'fr' , value:'FRENCH'},
    // {id:'GER' , value:'GERMANY'},
  ]

  // const arrayColor = [
  //   '#068DA9','#27374D','#482121','#B04759','#643A6B','#4F200D'
  // ]

  const translateWithApi = async (quote , sourceLang , targetLang) =>{

      // url API
      const API_URL = 'https://api.mymemory.translated.net/get';

      // request and response in try ... catch err

      try {
          // request
          const res = await axios.get(API_URL , {
              params:{
                  q: quote,
                  langpair: `${sourceLang}|${targetLang}`
              }
          })
          // response
          const translateRes = res.data.responseData.translatedText
          return translateRes
      } catch (error) {
          console.error("Error causing : ",error)
          return null;
      }
  }

  

  const [count, setCount] = useState(0)

  // use hook useDispatch for execute 
  const dispatch = useDispatch()
  const quotes = useSelector(state => state.quotes)
  console.log('Quotes',quotes)

  

  // // click on select
  // const clickSelect = () =>{
  //   // setChooseSelect(true)

  //   const selectLanguage = document.querySelector('#select-language')

  //   if(selectLanguage.value === "EN"){
  //     dispatch(quotesActions.denyChangeLanguage())
  //   }else{
  //     dispatch(quotesActions.changeLanguage(selectLanguage.value))
  //   }

  //   // change targetLanguage
  //   // console.log("selected",selectLanguage.value)
  //   // dispatch(quotesActions.setTargetLanguage(selectLanguage.value))
  // }
  // Get array of Quotes
  const getQuotes = async () =>{
    await apiQuote.get()
      .then((data) =>{
        // if(chooseSelect){
        //   dispatch(quotesActions.setQuotes(translate(data.data,"en",quotes.targetLanguage)))
        // }else{
          dispatch(quotesActions.setQuotes(data.data))
        // }
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
    {/* <img width="48" height="48" src="https://img.icons8.com/fluency/48/france-circular.png" alt="france-circular"/> */}
      {/* Componenent select language */}
      <LanguageChoose lang={lang} />
      <Title>Random Quotes</Title>
      {/* Display random  quote via this component */}
      <QuoteDisplay quotes={quotes} testGen={testGen} translateWithApi={translateWithApi} />
      <Footer>
        Made by Yandaki.
      </Footer>
    </>
  )
}

export default App

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { BottomPart, IconReload, IconShare, Link, TextQuote, TextQuoteAuthor, WrapperIconShare, WrapperQuote } from '../styled-components'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { quotesActions } from '../store/quoteSlice';


const QuoteDisplay = ({quotes , testGen , translateWithApi}) => {
    // dispatch function
    const dispatch = useDispatch()

    let textQuote = quotes.quote
    let textQuote1 = quotes.quote
    // const [quoteToDisplay , setquoteToDisplay] = useState(quotes.quote)

    // get state changeLanguage
    const changeLanguage = useSelector(state => state.quotes.changeLanguage)
    const sourceLanguage = useSelector(state => state.quotes.sourceLanguage)
    const targetLanguage = useSelector(state => state.quotes.targetLanguage)

    // 
    //     quoteToDisplay = translateWithApi(quoteToDisplay , sourceLanguage , targetLanguage)
    //

    // useEffect(() => {
        if(changeLanguage){
            translateWithApi(textQuote , sourceLanguage , targetLanguage).then(e => {
                    console.log('use trad...')
                    if(e !== 'PLEASE SELECT TWO DISTINCT LANGUAGES'){
                        dispatch(quotesActions.setQuote(e))
                    }else{
                        dispatch(quotesActions.setQuote(textQuote1))
                    }
                }
            )
            // .catch(() => )
        }
        // else if (sourceLanguage === targetLanguage){
        //     console.log('Quote in english')
        //     dispatch(quotesActions.setQuote(textQuote1))
        // }
        // else{

        // }
        // if (changeLanguage === false){
        //     dispatch(quotesActions.setQuote(textQuote))
        // }
    // } , [changeLanguage])
    
    // console.log(changeLanguage ? 'Need translate' : 'Not translate')
    // if true => translate
    // else quote originally
  return (
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
  )
}

export default QuoteDisplay
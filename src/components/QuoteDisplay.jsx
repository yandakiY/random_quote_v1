/* eslint-disable react/prop-types */
import React from 'react'
import { BottomPart, IconReload, IconShare, Link, TextQuote, TextQuoteAuthor, WrapperIconShare, WrapperQuote } from '../styled-components'

const QuoteDisplay = ({quotes , testGen}) => {
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
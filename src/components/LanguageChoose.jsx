/* eslint-disable react/prop-types */
import React from 'react'
import { OptionLanguage, SelectLanguage, WrapperLanguage } from '../styled-components'
import { quotesActions } from '../store/quoteSlice'
import { useDispatch, useSelector } from 'react-redux'

const LanguageChoose = ({lang}) => {

    const dispatch = useDispatch()

    // get quotes 
    const quotes = useSelector(state => state.quotes)
    // click on select
    const clickSelect = () =>{
        // setChooseSelect(true)

        const selectLanguage = document.querySelector('#select-language')

        if(selectLanguage.value === "EN" && quotes.targetLanguage === "EN"){
            dispatch(quotesActions.denyChangeLanguage())
        }else{
            dispatch(quotesActions.changeLanguage(selectLanguage.value))
        }

        // change targetLanguage
        // console.log("selected",selectLanguage.value)
        // dispatch(quotesActions.setTargetLanguage(selectLanguage.value))
    }
  return (
    // Wrapper select language
    <WrapperLanguage>
        Choose language : 
        <SelectLanguage id='select-language' onChange={(e) => clickSelect(e)}>
            {lang.map((e , i) => 
                (<OptionLanguage key={i} value={e.id}>
                    {e.value}
                </OptionLanguage>))}
        </SelectLanguage>
    </WrapperLanguage>
  )
}

export default LanguageChoose
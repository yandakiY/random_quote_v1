/* eslint-disable react/prop-types */
import React from 'react'
import { OptionLanguage, SelectLanguage, WrapperLanguage } from '../styled-components'

const LanguageChoose = ({lang , clickSelect}) => {
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
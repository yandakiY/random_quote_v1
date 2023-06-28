import styled from "styled-components";

export const Title = styled.h1`
    color:'white';
    font-size:50px;
    text-align:center;
    line-height:60px;
`;
export const TextQuote = styled.p`
    font-size:25px;
`
export const TextQuoteAuthor = styled(TextQuote)`
    font-style:italic;
    text-align:right;
    padding-top:20px;
`
export const BottomPart = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    padding-top:15px;
`
export const ButtonGen = styled.button`
    color:white;
    font-size:20px;
    width:140px;
    height:40px;
    border:none;
    background-color:black;
    cursor:pointer;
    border-radius:10px;
`
export const WrapperIconShare = styled.div`
    display:flex;
    gap:2em;
`
export const Link = styled.a`
    border:none;
`
export const IconShare = styled.i`
    font-size:40px;
    cursor:pointer;
`
export const IconReload = styled(IconShare)`
    font-size:35px;
`
export const WrapperQuote = styled.div`
    background-color:white;
    color:blueviolet;

    border-radius:10px;

    ${'' /* box-shadow: black; */}
    padding: 2.5em;

    width:370px;
    height:fit-content;
`
export const Footer = styled.div`
    font-size:25px;
    text-align:center;
    margin-top:10px;
`
export const WrapperLanguage = styled.div`
    margin-bottom:100px;
    ${'' /* border:solid 1px; */}

    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;

    height:50px;
`
// Select Language
export const SelectLanguage = styled.select`
    background-color:white;
    color:black;
    
    width: 130px;
    height: 40px;
`
// Option language
export const OptionLanguage = styled.option`
    cursor:pointer;
    height:50px;
`
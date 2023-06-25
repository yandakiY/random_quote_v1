import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider, useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import './index.css'
import store from './store/index.js'
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector.js'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.bg};
    transition: all ease 1.5s
  }

  #main{
    color:${props => props.bg};
  }
`

// const colorBg = useSelector(state => state.quotes.color)
const GetColorBg = () =>{
  const colorBg = useSelector(state => state.quotes.color)
  return colorBg
}


ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider>
    
    <Provider store={store}>
      <GlobalStyle bg={GetColorBg} />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  // </ThemeProvider>
  ,
)

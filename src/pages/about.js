import React, {useState} from 'react'

import { createGlobalStyle } from 'styled-components'
import Header from '../Components/Header'
import Sobre from '../Components/Sobre'
import Footer from '../Components/Footer'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Open Sans", sans-serif;
  }
`

export default function About() {
  const [check, setCheck] = useState(false)
  return (
    <div>
      <GlobalStyle />
      <Header Click={()=> setCheck(!check)} check={check}/>
      <Sobre check={check}/>
      <Footer check={check}/>
    </div>
  )
}

import React, {useState} from 'react'

import { createGlobalStyle } from 'styled-components'
import Header from '../Components/Header'
import Proj from '../Components/Projets'
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

export default function Home() {
  const [check, setCheck] = useState(false)
  return (
    <div>
      <GlobalStyle />
      <Header Click={()=> setCheck(!check)} check={check}/>
      <Proj check={check}/>
      <Footer check={check}/>
    </div>
  )
}

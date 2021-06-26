import React from 'react'
import Header from './Header.js'
import Numbers from './Numbers.js'
import MarksSelected from './MarksSelected.js'
import BetSelected from './BetSelected.js'
import Footer from './Footer.js'

import {} from "../assets/css/App.css"

/* 

1. Select A Number X5
    Background Changes Colour X5 
    The number is passed to Next Slot of NumberSelected Component X5
    Validation Code to equal 5 choices not more or less.

2. Select Bet Amount based on Values Available (1,5,10,20)
    The Bet is calculated
        -logic
    
    Total is display on Numbers Selected Component => Total Bet Div
    Press Cash => Modal Pops Up

    or

    Press Clear and ALL 5 numbers are deleted and We start OVer

3. Modal Pops Up with Cashier Page.

*/

const App = () => {

  return (
    <>
      <Header/>
      <main>
        <BetSelected/>
        <Numbers/>
        <MarksSelected/>
      </main>
      <Footer/>
    </>
  )
}

export default App



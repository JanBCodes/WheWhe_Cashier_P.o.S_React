import React from 'react'
import Header from './Header.js'
import Numbers from './Numbers.js'
import MarksSelected from './MarksSelected.js'
import BetSelected from './BetSelected.js'
import Footer from './Footer.js'

import {} from "../assets/css/App.css"

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



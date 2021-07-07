import React,{useState} from 'react'

import {} from "../assets/css/App.css"
import {} from "../assets/css/DesktopMQ.css"
import {} from "../assets/css/TabletMQ.css"
import {} from  "../assets/css/PhoneMQ.css"

import NumbersContext from '../context/NumbersContext.js'
import BetContext from '../context/BetContext.js'
import ModalContext from '../context/ModalContext';
import NumpadContext from '../context/NumpadContext';
import CashRecContext from '../context/CashRecContext';
import NumbersArrayContext from '../context/NumbersArrayContext'
import CounterContext from '../context/CounterContext';

import HomePage from '../pages/HomePage';
import ReceiptPage from '../pages/ReceiptPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  const [counter,setCounter] = useState({count: 0});
  const [allNumbers, setAllNumbers] = useState([]);
  const [numbersSelected, setNumbersSelected] = useState([]);
  const [betSelected, setbetSelected] = useState({value: 0});
  const [modalStatus, setModalStatus] = useState({status: false});
  const [numpad, setNumPad] = useState({value: 0});
  const [cashRec, setCashReceived] = useState({value: 0});

  return (
    <Router>
      <Switch>

        <CounterContext.Provider value={{counter,setCounter}}>
        <NumbersArrayContext.Provider value={{allNumbers,setAllNumbers}}>
        <NumbersContext.Provider value={{numbersSelected, setNumbersSelected}}>
        <BetContext.Provider value={{betSelected, setbetSelected}}>
        <ModalContext.Provider value={{modalStatus, setModalStatus}}>
        <NumpadContext.Provider value={{numpad, setNumPad}}>
        <CashRecContext.Provider value={{cashRec, setCashReceived}}>
          
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/receipt">
          <ReceiptPage/>
        </Route>

        </CashRecContext.Provider>
        </NumpadContext.Provider>
        </ModalContext.Provider>
        </BetContext.Provider>
        </NumbersContext.Provider>    
        </NumbersArrayContext.Provider>
        </CounterContext.Provider>

      </Switch>
    </Router>
  )
}

export default App;

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



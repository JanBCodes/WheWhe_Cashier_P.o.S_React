import {useContext } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";


import Header from "./Header"
import MarksSelected from "./MarksSelected"
import CashInput from './CashInput';
import Footer from './Footer';

import NumbersArrayContext from '../context/NumbersArrayContext';
import NumbersContext from '../context/NumbersContext';
import BetContext from '../context/BetContext.js'
import ModalContext from '../context/ModalContext';
import NumpadContext from '../context/NumpadContext';
import CashRecContext from '../context/CashRecContext';
import CounterContext from '../context/CounterContext';



const Receipt = () => {

    const reroute = useHistory()


    const {allNumbers,setAllNumbers} = useContext(NumbersArrayContext); 
    const {setNumbersSelected} = useContext(NumbersContext); 
    const {setbetSelected} = useContext(BetContext); 
    const {setModalStatus} = useContext(ModalContext); 
    const {setNumPad} = useContext(NumpadContext); 
    const {setCashReceived} = useContext(CashRecContext); 
    const {setCounter} = useContext(CounterContext); 


    const reSet = () => {

        const OGNumberArray = [...allNumbers] 
        OGNumberArray.map(object => object.isSelected = false)
        setAllNumbers(OGNumberArray)

        setCounter({count: 0})
        setNumbersSelected([])
        setbetSelected({value: 0})
        setModalStatus({status: false})
        setCashReceived({value: 0})
        setNumPad({value: 0})

        reroute.push("/")

    }

    return (
        <div className="receiptPage">
            <Header/>
                <div className="receiptContainer">
                    <p> Receipt:  </p>
                    <MarksSelected/>
                    <CashInput/>
                    <p> Good Luck </p>
                </div>
                <button className="closeButton" onClick={reSet}> Exit </button>
            <Footer/>
        </div>
    )
}

export default Receipt;

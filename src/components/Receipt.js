import {useContext } from 'react'
import { Link } from 'react-router-dom';

import Header from "./Header"
import MarksSelected from "./MarksSelected"
import CashInput from './CashInput';
import Footer from './Footer';

import NumbersContext from '../context/NumbersContext';
import BetContext from '../context/BetContext.js'
import ModalContext from '../context/ModalContext';
import NumpadContext from '../context/NumpadContext';
import CashRecContext from '../context/CashRecContext';

const Receipt = () => {

    const {setNumbersSelected} = useContext(NumbersContext); 
    const {setbetSelected} = useContext(BetContext); 
    const {setModalStatus} = useContext(ModalContext); 
    const {setNumPad} = useContext(NumpadContext); 
    const {setCashReceived} = useContext(CashRecContext); 

    const reSet = () => {

        setNumbersSelected([])
        setbetSelected({value: 0})
        setModalStatus({status: false})
        setCashReceived({value: 0})
        setNumPad({value: 0})

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
                <button className="closeButton" onClick={reSet}> <Link to={`/`}> X </Link> </button>
            <Footer/>
        </div>
    )
}

export default Receipt;

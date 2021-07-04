import React,{useContext } from 'react'
import NumbersContext from "../context/NumbersContext";
import BetContext from '../context/BetContext';

const MarksSelected = () => {

    const {numbersSelected} = useContext(NumbersContext); // importing State of Selected Numbers via Context
    const {betSelected} = useContext(BetContext)

    return (
        <div className="marksContainer">
            <div className="marksChosenHeader">
                Numbers Selected:
            </div>

            {numbersSelected.map((numberSelected) => (
                <div key={numberSelected} className="marksChosen"> {numberSelected} </div>
            ))}

            <div className="totalBet">
                Total Bet ${betSelected.value}
            </div>
        </div>
    )
}

export default MarksSelected;
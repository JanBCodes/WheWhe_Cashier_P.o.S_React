import {useContext } from 'react'
import NumbersContext from "../context/NumbersContext";
import BetContext from '../context/BetContext';

const MarksSelected = () => {

    const {numbersSelected} = useContext(NumbersContext); // importing State of Selected Numbers via Context
    const {betSelected} = useContext(BetContext)

    return (
        <div className="marksContainer">
            <div className="marksChosenHeader">
                Marks Selected:

                {numbersSelected.map((numberSelected) => (
                <div key={numberSelected} className="marksChosen"> {numberSelected} </div>
            ))}
            </div>

            <div className="totalBet">
                Total Bet <br/>${betSelected.value}.00
            </div>
        </div>
    )
}

export default MarksSelected;
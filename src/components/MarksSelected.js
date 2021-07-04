import React,{useContext } from 'react'
import NumbersContext from "../context/NumbersContext";

const MarksSelected = () => {

    const {numbersSelected} = useContext(NumbersContext); // importing SET FUNCTION

    return (
        <div className="marksContainer">
            <div className="marksChosenHeader">
                Numbers Selected:
            </div>

            {numbersSelected.map((numberSelected) => (
                <div key={numberSelected} className="marksChosen"> {numberSelected} </div>
            ))}

            <div className="totalBet">
                Total Bet $ 
            </div>
        </div>
    )
}

export default MarksSelected;
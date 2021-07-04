import React,{useContext } from 'react'
import BetContext from '../context/BetContext';


const BetSelected = () => {

    const arrayofNumbers = [1,5,10,20]

    const {betSelected, setbetSelected} = useContext(BetContext)
   
    const tallyBet = (Evt) => {

        const amountToAddToBet = parseInt(Evt.target.id)
        const OGBetAmount = {...betSelected} // {value:0}
        const newTally = OGBetAmount.value + amountToAddToBet

        setbetSelected({value:newTally})
    }

    const clearBet = () => setbetSelected({value: 0})

    

    return (
        <div className="betContainer ">
            {arrayofNumbers.map((numb) => (
                <div className="betDiv"  key={numb}> 
                    <div className="bet" id={numb} onClick={tallyBet}> 
                        ${numb}
                    </div>
                </div>
              
            ))}
            <div className="clearBet" onClick={clearBet}>
                Clear Bet
            </div>           
        </div>
    )
}

export default BetSelected;

// animate__animated animate__rollIn
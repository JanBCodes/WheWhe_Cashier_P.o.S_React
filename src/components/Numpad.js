import { useContext } from "react";
import CashRecContext from "../context/CashRecContext";


const maxNumbers = 9;
const numPad = [];

for (let i=1; i<=maxNumbers; i++)
{
    const numberButton = 
    {
        number: i,
        key: i,
        isSelected: false
    }

    numPad.push(numberButton)
}


const Numpad = () => {

    const {cashRec,setCashReceived} = useContext(CashRecContext)

    const addCash = (e) => {

        const enteredCash = parseInt(e.target.innerHTML)

        let OGcashRec = {...cashRec}

        if(OGcashRec.value === 0)
        {
            OGcashRec.value = parseInt(`${enteredCash}`)
            setCashReceived(OGcashRec)
        }
        else
        {
            OGcashRec.value = parseInt(`${OGcashRec.value}`+`${enteredCash}`)
            setCashReceived(OGcashRec)
        }

    }

    const clearCash = () => {

        let OGcashRec = {...cashRec}
        OGcashRec.value = 0
        setCashReceived(OGcashRec)

    }


    return (
        <div className="numpadContainer"> 
            {numPad.map((numberButton) => (
                <div value={numberButton.number} key={numberButton.number} className="numberDiv" onClick={addCash}>
                    {numberButton.number}
                </div>
            ))}    

            <div id="0" className="numberDiv" onClick={addCash}>
                0
            </div>   
            <div id="period" className="numberDiv">
                .
            </div>   
            <div id="clear" className="numberDiv" onClick={clearCash}>
                C
            </div>   
        </div>
    )
}

export default Numpad

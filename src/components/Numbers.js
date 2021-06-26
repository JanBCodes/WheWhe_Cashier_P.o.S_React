import { useState } from "react";

// Global Variable
const maxNumbers = 20;
const arrayofNumbers = [];

for (let i=1; i<=maxNumbers; i++)
{
    const numberButton = 
    {
        number: i,
        key: i,
        isSelected: false
    }

    arrayofNumbers.push(numberButton)
}

// Numbers Component
const Numbers = () => {

    const [allNumbers, setAllNumbers] = useState(arrayofNumbers);

    const changeBackgroundColour = (event) => {

        let keyOfButtonSelected = parseInt(event.target.id)

        const originalArray = [...allNumbers] // Original State reference

        const foundbuttonObj = originalArray.find((element) => element.number === keyOfButtonSelected) // return whole object// in my case, the whole object index

        foundbuttonObj.isSelected = true

        setAllNumbers(originalArray)

    }

    return (
        <h2> Chose 5 Numbers:

            <div className="numbersContainer ">    
                
                {allNumbers.map((numberButton) => (

                    <div id={numberButton.number} key={numberButton.number} className={numberButton.isSelected === true ? "green numberDiv animate__animated animate__zoomIn" : "red numberDiv animate__animated animate__zoomIn"}
                     onClick={changeBackgroundColour}>
                        {numberButton.number}
                    </div>

                ))}

            </div>

            <div className="cashAndClearButtonsContainer">
                <button className="cashButton"> Cash </button>
                <button className="clearButton"> Clear </button>
            </div> 
        </h2>
     )
}

export default Numbers;


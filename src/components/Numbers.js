import { useContext, useState } from "react";
import NumbersContext from "../context/NumbersContext";

// Global Variables
const maxNumbers = 20;
let numberBlocker = 0;

const selectedNumbers = []
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

    const {setNumbersSelected} = useContext(NumbersContext); // importing SET FUNCTION

    const [allNumbers, setAllNumbers] = useState(arrayofNumbers);

    const Action = (event) => {

        let idOfNumberSelected = parseInt(event.target.id)

        const originalArray = [...allNumbers] // Original State reference

        const foundbuttonObj = originalArray.find((element) => element.number === idOfNumberSelected) // return whole object// in my case, the whole object index

            if(foundbuttonObj.isSelected === true) //Deselected Number
            {
                numberBlocker--

                foundbuttonObj.isSelected = false

                setAllNumbers(originalArray)
            }
            else if(numberBlocker <= 4)  //Selected Number
            {
                selectedNumbers.push(idOfNumberSelected)          

                // setNumbersSelected(selectedNumbers)   // ASSSIGNING ARRAY DATA TO SET FUNCTION

                numberBlocker++

                foundbuttonObj.isSelected = true
                
                setAllNumbers(originalArray)
            }

            setNumbersSelected(selectedNumbers) 
    }

    return (
        <h2> Chose 5 Numbers:

            <div className="numbersContainer ">    
                
                {allNumbers.map((numberButton) => (

                    <div id={numberButton.number} key={numberButton.number} className={numberButton.isSelected === true ? "green numberDiv animate__animated animate__zoomIn" : "red numberDiv animate__animated animate__zoomIn"}
                     onClick={Action} onDoubleClick={Action}>

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


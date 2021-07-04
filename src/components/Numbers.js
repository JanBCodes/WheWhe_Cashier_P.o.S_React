import { useContext, useState } from "react";
import NumbersContext from "../context/NumbersContext";
import BetContext from '../context/BetContext';

// Global Variables
const maxNumbers = 20;
let countOfNumbersSelected = 0;

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

    const {numbersSelected, setNumbersSelected} = useContext(NumbersContext); // importing SET FUNCTION
    const {betSelected} = useContext(BetContext)

    const [allNumbers, setAllNumbers] = useState(arrayofNumbers);

    const placeBet = () => {

        if(countOfNumbersSelected === 5 && betSelected.value > 0)
        {
            alert(`Link to Cash Page`)
        }

    }



    const clearNumbers = () => {

        countOfNumbersSelected = 0; // Resets Counter to 0

        setNumbersSelected([]) //Removes Marks Selected Numbers to an Empty Array

        const OGNumberArray = [...allNumbers] 
        OGNumberArray.map(object => object.isSelected = false)
        setAllNumbers(OGNumberArray)
    
    }


    const numberClicked = (event) => {

        const idOfNumberSelected = parseInt(event.target.id)

        const OGNnumbersSelected = [...numbersSelected] // Original State reference
        const OGNumberArray = [...allNumbers] // Original State reference

        const foundbuttonObj = OGNumberArray.find((element) => element.number === idOfNumberSelected) // return whole object// in my case, the whole object index

        const removeNumberfromSelectedMarksArray = ((idOfNumberSelected)=>{

            const index = OGNnumbersSelected.indexOf(idOfNumberSelected);
            if (index > -1) 
            {
                return index
            }   
        
        });

            if(foundbuttonObj.isSelected === true) //Deselected Number
            {
                countOfNumbersSelected--

                foundbuttonObj.isSelected = false

                OGNnumbersSelected.splice(removeNumberfromSelectedMarksArray(idOfNumberSelected), 1)

                setNumbersSelected(OGNnumbersSelected) 

                setAllNumbers(OGNumberArray)
            }

            else if(countOfNumbersSelected <= 4)  //Selected Number
            {

                countOfNumbersSelected++

                foundbuttonObj.isSelected = true

                OGNnumbersSelected.push(idOfNumberSelected)          

                setNumbersSelected(OGNnumbersSelected) 

                setAllNumbers(OGNumberArray)
            }
    }

    return (
        <h2> Chose 5 Numbers:

            <div className="numbersContainer ">    
                
                {allNumbers.map((numberButton) => (

                    <div id={numberButton.number} key={numberButton.number} 
                    className={numberButton.isSelected === true ? "green numberDiv animate__animated animate__zoomIn" : "red numberDiv animate__animated animate__zoomIn"}
                     onClick={numberClicked}>

                        {numberButton.number}

                    </div>

                ))}

            </div>

            <div className="cashAndClearButtonsContainer">

                <button className="cashButton" onClick={placeBet}> Place Bet </button>

                <button className="clearButton" onClick={clearNumbers}> Clear Numbers </button>

            </div> 
        </h2>
     )
}

export default Numbers;
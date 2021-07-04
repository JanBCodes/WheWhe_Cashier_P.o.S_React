import { useContext, useState } from "react";
import NumbersContext from "../context/NumbersContext";

// Global Variables
const maxNumbers = 20;
let numberBlocker = 0;

// const selectedNumbers = []
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
    
    const [allNumbers, setAllNumbers] = useState(arrayofNumbers);

    const numberClicked = (event) => {
        
    console.log(numbersSelected)

        let idOfNumberSelected = parseInt(event.target.id)

        const OGNnumbersSelected = [...numbersSelected] // Original State reference
        const OGNumberArray = [...allNumbers] // Original State reference

        const foundbuttonObj = OGNumberArray.find((element) => element.number === idOfNumberSelected) // return whole object// in my case, the whole object index

            if(foundbuttonObj.isSelected === true) //Deselected Number
            {
                numberBlocker--

                foundbuttonObj.isSelected = false

                setAllNumbers(OGNumberArray)
            }
            else if(numberBlocker <= 4)  //Selected Number
            {

                numberBlocker++

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

                    <div id={numberButton.number} key={numberButton.number} className={numberButton.isSelected === true ? "green numberDiv animate__animated animate__zoomIn" : "red numberDiv animate__animated animate__zoomIn"}
                     onClick={numberClicked}>

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
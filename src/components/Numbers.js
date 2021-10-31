import { useContext } from "react";
import NumbersContext from "../context/NumbersContext";
import BetContext from '../context/BetContext';
import ModalContext from "../context/ModalContext";
import NumbersArrayContext from "../context/NumbersArrayContext";
import CounterContext from '../context/CounterContext';


// Global 
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

const Numbers = () => {

    const {numbersSelected, setNumbersSelected} = useContext(NumbersContext); 
    const {betSelected} = useContext(BetContext)
    const {setCounter} = useContext(CounterContext)
    const {modalStatus,setModalStatus} = useContext(ModalContext)
    const {allNumbers,setAllNumbers} = useContext(NumbersArrayContext)

    setAllNumbers(arrayofNumbers)
    
    const placeBet = () => {
        
        if(countOfNumbersSelected === 5 && betSelected.value > 0)
        {
            const currentStatus = {...modalStatus}
            currentStatus.status = true
            setModalStatus(currentStatus)
        }
        else
        {
            alert("Please choose 5 numbers & place a BET greater than $0.00")
        }

    }

    const clearNumbers = () => {

        countOfNumbersSelected = 0; // Resets Counter to 0

        setCounter({count:countOfNumbersSelected})

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

            const index = OGNnumbersSelected.indexOf(idOfNumberSelected)
                
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

            setCounter({count:countOfNumbersSelected})
            
            setNumbersSelected(OGNnumbersSelected) 

            setAllNumbers(OGNumberArray)
        }
        else if(countOfNumbersSelected <= 4)  //Selected Number
        {

            countOfNumbersSelected++

            foundbuttonObj.isSelected = true

            OGNnumbersSelected.push(idOfNumberSelected) 
            
            setCounter({count:countOfNumbersSelected})

            setNumbersSelected(OGNnumbersSelected) 

            setAllNumbers(OGNumberArray)
        }
    }

    return (
        <h2> Choose 5 Numbers:

            <div className="numbersContainer ">    
                
                {allNumbers.map((numberButton) => (

                    <div id={numberButton.number} key={numberButton.number} 
                    className={numberButton.isSelected === true 
                        ? "unclicked numberDiv animate__animated animate__zoomIn" 
                        : "clicked numberDiv animate__animated animate__zoomIn"}
                     onClick={numberClicked}>

                        {numberButton.number}

                    </div>

                ))}

            </div>

            <div className="cashAndClearNumberContainer">

                <button className="cashButton" onClick={placeBet}> Place Bet </button>

                <button className="clearNumbers" onClick={clearNumbers}> Clear Numbers </button>

            </div> 

        </h2>
     )
}

export default Numbers;
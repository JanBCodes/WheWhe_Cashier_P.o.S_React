import React,{useContext,useState } from 'react'
import NumbersContext from "../context/NumbersContext";


// const MarksSelected = ({MarkOne,MarkTwo,MarkThree,MarkFour,MarkFive}) => {
const MarksSelected = () => {

    const {numbersSelected} = useContext(NumbersContext);
   
    const [numberPanel, setNumberPanel] = useState(numbersSelected);


    setInterval(()=>{

        const numberPanelState = [...numbersSelected]

        setNumberPanel(numberPanelState)

    },1000)


    // There must be an easier way to render this State on XYZ change of state.

/* const renderState = (()=>{setNumberPanel(numberPanelState)}) */

/*     useEffect(()=>{

          setNumberPanel(numberPanelState)
  
    },[numbersSelected.length]) */

        
/*     if(numbersSelected.length === 5)
    {
        setNumberPanel(numberPanelState)
    } */

    
/*     let displayNumbersSelected;

    if(numberPanelState.length == 4)
    {
        displayNumbersSelected = setInterval(()=>{
            setNumberPanel(numberPanelState)
        },1000)
    }
    else
    {
        clearInterval(displayNumbersSelected)

    } */

    return (
        <div className="marksContainer">
            <div className="marksChosenHeader">
                Numbers Selected:
            </div>

            {numberPanel.map((numberSelected) => (
                <div key={numberSelected} className="marksChosen"> {numberSelected} </div>
            ))}

            <div className="totalBet">
                Total Bet $ 
            </div>
        </div>
    )
}

export default MarksSelected;

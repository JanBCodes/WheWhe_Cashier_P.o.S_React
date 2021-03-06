import { useContext } from "react";
import BetContext from '../context/BetContext';
import CashRecContext from "../context/CashRecContext";
import ModalContext from "../context/ModalContext";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";


const CashInput = () => {

    const reroute = useHistory()

    const {betSelected} = useContext(BetContext)
    const {cashRec,setCashReceived} = useContext(CashRecContext)
    const {modalStatus,setModalStatus} = useContext(ModalContext)
    
    let cashReceived = cashRec.value
    const changeDue = cashReceived - betSelected.value

    let changeStatus = "Change"
   
    if(changeDue > 0)
    {
        changeStatus = "Change Due"
    }
    else
    {
        changeStatus = "Cx to Pay"
    }

    const checkIfPaid = () =>
    {

        if(changeDue < 0)
        {
            alert("Please pay for you Bet.")
        }
        else
        {
            reroute.push("/receipt")
        }
    

    }

    const quitTransaction = () => {

        const currentStatus = {...modalStatus}
        currentStatus.status = false
        setCashReceived({value: 0})
        setModalStatus(currentStatus)
    }

    return (
        <div className="cashInputContainer"> 
            <div className="cashInputContainerHeader">
                Enter Amount of Cash Received 
            </div>
            <div className="cashInputContainer">
                <div className="totalBetDiv bold" >
                    Total Bet: 
                    <br/> ${betSelected.value}.00
                </div>
                <div className="receivedCash bold">
                     Cash Received: 
                     <br/> ${cashReceived}.00
                </div>
                <div className={changeDue > 0 ? "changeDue giveChange" : "changeDue noChange"}> 
                    {changeStatus}: 
                    <br/> ${changeDue}.00
                </div>
            </div>
            <div className="confirmButtons">
                <div className="confirm" onClick={checkIfPaid}>Cash</div>
                <div className="closeButton" onClick={quitTransaction}> Back </div>
            </div>
        </div>
    )
}

export default CashInput 

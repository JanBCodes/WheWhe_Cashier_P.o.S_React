import { useContext } from "react";
import BetContext from '../context/BetContext';
import CashRecContext from "../context/CashRecContext";
import ModalContext from "../context/ModalContext";


const CashInput = () => {

    const {betSelected} = useContext(BetContext)
    const {cashRec} = useContext(CashRecContext)
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

    const quitTransaction = () => {

        const currentStatus = {...modalStatus}
        currentStatus.status = false
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
                <div className="confirm"> Cash </div>
                <div className="closeButton" onClick={quitTransaction}> Quit </div>
            </div>
        </div>
    )
}

export default CashInput

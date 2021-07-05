import {useContext } from 'react'
import ModalContext from '../context/ModalContext';
import Numpad from './Numpad';
import CashInput from './CashInput';

const Modal = () => {

    const {modalStatus} = useContext(ModalContext)
    
    return (
        <div className={modalStatus.status === true ? "modalContainer" : "hide"}>
            <div className="container">
                <div className="modalHeader"> Whe Whe Cash Payment </div>
                <div className="modalBody">
                    <CashInput/>
                    <Numpad/>
                </div>
            </div>
        </div>
    )
}

export default Modal;

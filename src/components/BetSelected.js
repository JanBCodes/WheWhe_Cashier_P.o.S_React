const BetSelected = () => {

    const arrayofNumbers = ["$1","$5","$10","$20"]

    return (
        <div className="betContainer">
            {arrayofNumbers.map((numb) => (
                <div className="betDiv"> 
                    <div className="bet" key={numb}> 
                        {numb}
                    </div>
                </div>
            ))}           
        </div>
    )
}

export default BetSelected

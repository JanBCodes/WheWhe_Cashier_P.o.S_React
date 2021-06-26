const BetSelected = () => {

    const arrayofNumbers = ["$1","$5","$10","$20"]

    return (
        <div className="betContainer ">
            {arrayofNumbers.map((numb) => (
                <div className="betDiv" key={numb}> 
                    <div className="bet" > 
                        {numb}
                    </div>
                </div>
            ))}           
        </div>
    )
}

export default BetSelected

// animate__animated animate__rollIn
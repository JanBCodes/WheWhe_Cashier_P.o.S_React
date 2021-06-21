const Numbers = () => {

    const arrayofNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return (
        <h2> Chose 5 Numbers:
            <div className="numbersContainer">               
                {arrayofNumbers.map((number) => (

                    <div className="numberDiv" key={number}> 
                        {number }
                    </div>
                ))}           
            </div>
            <div className="cashAndClearButtonsContainer">
                <div className="cashButton"> Cash </div>
                <div className="clearButton"> Clear </div>
            </div> 
        </h2>
 
    )
}

export default Numbers

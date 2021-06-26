import React from "react";

import Header from "../components/Header";
import BetSelected from "../components/BetSelected"
import Numbers from "../components/Numbers"
import MarksSelected from "../components/MarksSelected"
import Footer from "../components/Footer";


const HomePage = () => {
    return (
        <>   
            <Header/>
                <main>
                    <BetSelected/>
                    <Numbers/>
                    <MarksSelected/>
                </main>
            <Footer/>
      </>
    )
}

export default HomePage;



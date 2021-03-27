import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Keys from "../components/main/Keys";


const KeysMain = () => {
    return (
        <div>
            <div className="main-keys">

                <NavBar />
                <Keys/>
            </div>
            <div className="bot-bg">
                <Footer />
            </div>
        </div>
    );
};

export default KeysMain;
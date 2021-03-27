import React from 'react';
import Footer from "../components/Footer";
import AerospaceServices from "../components/main/AerospaceServices";

import ServicesCarusel from "../components/main/ServicesCarusel/ServicesCarusel";
import NavBar from "../components/NavBar";



const MainServices = () => {
    return (
        <div>
            <div className="main-bg">
                <NavBar />
                <ServicesCarusel />
                <AerospaceServices />
            </div>
            <div className="bot-bg">
                <Footer />
            </div>
        </div>
    );
};

export default MainServices;
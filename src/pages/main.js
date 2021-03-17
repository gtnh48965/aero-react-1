import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "../components/main/About";
import Texnology from "../components/main/Texnology";
import Whereuse from "../components/main/Whereuse";
import Whytop from "../components/main/Whytop";
import Partners from "../components/main/Partners";
import Media from "../components/main/Media";
import Services from "../components/main/Services";
import AboutCarusel from "../components/main/AboutCarusel/AboutCarusel";

const Main = () => {
    return (
        <div>
            <div className="main-bg">
                <NavBar />
                <About />
                <AboutCarusel />
                <Texnology />
                <Whereuse />
                <Services/>
                <Whytop />
            </div>
            <div className="bot-bg">
                <Media />
                <Partners />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
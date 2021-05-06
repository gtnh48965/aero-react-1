import React from 'react';
import Footer from "../components/Footer";
import AerospaceServices from "../components/main/AerospaceServices";
import ServicesCarusel from "../components/main/ServicesCarusel/ServicesCarusel";
import NavBar from "../components/NavBar";
import ServicesCaruselMobail from "../components/main/ServicesCarusel/ServicesCaruseMobail";
// import AerospaceServicesMobail from "../components/main/ServicesCarusel/ServicesCaruseMobail";



class MainServices extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {


        if (window.innerWidth >= 700) {
            return (
                <div className="serv-bg">
                    <div>
                        <NavBar/>
                        <ServicesCarusel/>
                        <AerospaceServices/>
                    </div>
                    <div className="">
                        <Footer/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="serv-bg">
                    <div>
                        {/*<NavBar/>*/}
                        <ServicesCaruselMobail/>
                        <AerospaceServices/>
                    </div>
                    <div className="">
                        {/*<Footer/>*/}
                    </div>
                </div>)
        }
    };
}

export default MainServices;
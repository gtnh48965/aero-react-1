import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss'
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import AboutStore from "./store/AboutStore";
import ServisStore from "./store/ServisStore";

export const Context = createContext(null);
ReactDOM.render(
    <Context.Provider value = {{
        about: new AboutStore(),
        servis: new ServisStore(),

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

// export const Context = createContext(null);
// ReactDOM.render(
//     <Context.Provider value = {{
//         about: new ServisStore()}}>
//         <App />
//     </Context.Provider>,
//     document.getElementById('root')
// );
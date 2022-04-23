import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import AOS from "aos";
import "aos/dist/aos.css";


const Root = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Root/>)

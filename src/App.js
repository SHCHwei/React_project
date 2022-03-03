import React from 'react';

import HomePage from "./play_app/HomePage.js";
import FirstPage from "./play_app/FirstPage.js";
import SecondPage from "./play_app/SecondPage.js";
import { Routes, Route } from "react-router-dom";



const App=()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/page1" element={<FirstPage />}/>
            <Route path="/page2" element={<SecondPage />}/>
        </Routes>
    )
}

export default App;
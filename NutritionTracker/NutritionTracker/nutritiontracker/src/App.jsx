import {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./assets/Components/Register.jsx";
import {Bmicalculation} from "./assets/Components/Bmicalculation.jsx";
import Notfound from "./assets/Components/Notfound.jsx";
import axios from "axios";
import {Foodcard} from "./assets/Components/Foodcard.jsx";
import Search from "./assets/Components/Search.jsx";


function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/bmicalculation" element={<Bmicalculation/>}/>
                    <Route path="*" element={<Notfound/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App

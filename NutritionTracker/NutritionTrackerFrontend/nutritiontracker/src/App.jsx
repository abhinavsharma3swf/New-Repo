import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./assets/Components/Register.jsx";
import {Bmicalculation} from "./assets/Components/Bmicalculation.jsx";
import Notfound from "./assets/Components/Notfound.jsx";
import Search from "./assets/Components/Search.jsx";
import {createContext, useState} from "react";
import {FoodService} from "./assets/Components/FoodService.jsx";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./assets/Theme.jsx";
import {DailyOverviewChart} from "./assets/Components/DailyOverviewChart.jsx";

export const UserContext = createContext();
function App() {

    const [userId, setUserId]= useState(null);
    const [userGoal, setUserGoal]= useState(2000);




    return (
        <>
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <UserContext.Provider value={{userId, setUserId, userGoal, setUserGoal}}>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/bmicalculator" element={<Bmicalculation/>}/>
                    <Route path="*" element={<Notfound/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/foodservice" element={<FoodService/>}/>
                    <Route path="/overview" element={<DailyOverviewChart/>}/>
                </Routes>
                    </UserContext.Provider>
            </BrowserRouter>
            </ThemeProvider>


        </>
    );
}

export default App

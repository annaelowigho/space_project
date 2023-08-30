import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import DestinationMars from "./pages/Destination/DestinationMars";
import DestinationEuropa from "./pages/Destination/DestinationEuropa";
import DestinationTitan from "./pages/Destination/DestinationTitan";
import Crew from "./pages/Destination";
import Technology from "./pages/Technology";


function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/destination" element={null} >
                    <Route index element={<Destination />}/>
                    <Route path="europa" element={<DestinationEuropa/>} />
                    <Route path="titan" element={<DestinationTitan/>} />
                    <Route path="mars" element={<DestinationMars/>} />
                </Route>
                <Route path="/crew" element={<Crew />}/>
                <Route path='/technology' element={<Technology/>}>
                    <Route path='a' element={null} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

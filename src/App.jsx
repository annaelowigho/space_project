import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import DestinationMars from "./pages/Destination/DestinationMars";
import DestinationEuropa from "./pages/Destination/DestinationEuropa";
import DestinationTitan from "./pages/Destination/DestinationTitan";
import Crew from "./pages/Crew";
import CrewMission from "./pages/Crew/CrewMission";
import CrewPilot from "./pages/Crew/CrewPilot";
import CrewFlight from "./pages/Crew/CrewFlight";
import Technology from "./pages/Technology";
import Aos from "aos"
import "aos/dist/aos.css";
import Technology1 from "./pages/Technology/Technology1";
import Technology2 from "./pages/Technology/Technology2";



function App() {

    useEffect(()=>{
        Aos.init({once:true, duration: 1500})
    },[])
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
                <Route path="/crew" element={null}> 
                    <Route index element={<Crew />}/>
                    <Route path="mission" element={<CrewMission />}/>
                    <Route path="pilot" element={<CrewPilot />}/>
                    <Route path="flight" element={<CrewFlight />}/>
                </Route>
                <Route path='/technology' element={null}>
                    <Route index element={<Technology />} />
                    <Route path="technology1" element={<Technology1 />}/>
                    <Route path="technology2" element={<Technology2 />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

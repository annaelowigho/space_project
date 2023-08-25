import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />

                <Route path='/technology' element={null}>
                    <Route path='a' />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;

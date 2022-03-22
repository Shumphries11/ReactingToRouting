import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Films from "./pages/Films";
import People from "./pages/People";
import AboutFilm from "./pages/AboutFilm";
import AboutPeople from "./pages/AboutPeople";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/"  element= {<Home />} />
                <Route path="/films"  element={ <Films />} />
                <Route path="/films/:filmsid"  element={ <AboutFilm />} />
                <Route path="/people"  element={<People />} />
                <Route path="/people/:peopleid"  element={<AboutPeople />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;

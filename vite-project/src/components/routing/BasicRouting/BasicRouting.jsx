import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";



function BrowserRouter() {
    return(
        <Router>
            <>
            <Routes>
                <Route path="/" exact element={<Nav/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/about/:name" exact element={<About/>} />
            </Routes>
            </>
        </Router>
    )
}

export default BrowserRouter;
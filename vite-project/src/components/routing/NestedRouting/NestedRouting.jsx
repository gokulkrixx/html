import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Dashboard from "./Dashboard";
import DashboardNav from "./DashboardNav";

function NestedRouting() {
    return (
        <Router>
            <>
            <Routes>
                <Route path={"/"} exact element ={<Nav/>}/>
                <Route path="/home" exact element ={<Home/>}/>
                <Route path="/dashboard/*" exact element ={<Dashboard/>}/>
            </Routes>
            </>
        </Router>
    )
}

export default NestedRouting;

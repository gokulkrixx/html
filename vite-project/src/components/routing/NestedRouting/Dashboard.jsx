import { Routes,Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import DashboardNav from "./DashboardNav";

export default function Dashboard(){
    return(
        <>
        <Routes>
            <Route path="/" exact element={<DashboardNav/>}/>
            <Route path="/profile" exact element={<Profile/>}/>
            <Route path="/settings" exact element={<Settings/>}/>
        </Routes>
        </>
    )
}
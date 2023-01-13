import React from "react";
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom"

import Dashboard from "../Pages/Dashboard"

const Router = () => {
    return <BrowserRouter>
        <Routes>
        <Route path="/" element ={<Navigate to="/dashboard"  element={<Dashboard/>}/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
};
export default Router;
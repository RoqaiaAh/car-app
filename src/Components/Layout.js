import React from "react";
import Router from "../Routes/Router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const Layout =()=>{
    return(
        <div className="layout">
          <Sidebar/>
            <div className="main-layout">
            <Navbar/>
            <div className="content">
            <Router/>
            </div>
            </div>
            
        </div>
    )
};

export default Layout
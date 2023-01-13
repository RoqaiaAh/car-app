import React from "react";
import '../Components/style.css';
import {VscBellDot} from 'react-icons/vsc';
import {BsSearch} from 'react-icons/bs';
import profileImg from "../assets/img/profile-02.png";
import { IconContext } from "react-icons";

const Navbar =()=>{
    return(
        <>
       <div className="top-nav">
        <div className="top-nav-wrapper">
            <div className="search-box">
            <div><BsSearch/></div>
            <input type="text" placeholder="Search or type"/>
                
            </div>
            <div className="top-nav-right">
            <IconContext.Provider value={{className: 'react-icons' }}>
                <span className="notification">
                    <VscBellDot/>  
                </span> 
                </IconContext.Provider>
               
                <div className="profile">
                <img src={profileImg} alt="profile"/>
                </div>
            </div>
        </div>
       </div>
      
        </>
    )
}

export default Navbar
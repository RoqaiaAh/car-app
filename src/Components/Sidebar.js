import React from "react";
import "./style.css";
import {RxDashboard} from 'react-icons/rx';
import {BsPersonCircle ,BsBag,BsScissors} from 'react-icons/bs';
import {AiOutlineCar,AiOutlineShoppingCart} from 'react-icons/ai';
import {HiOutlineCalendar} from 'react-icons/hi';
import {BiMessageDetail}from 'react-icons/bi';
const Sidebar =()=>{
    return(
        <><div className="sideBar">
         <div className="tool-bar">
        <div className="logo">
        </div>
        <div className="tool-logo">Motiv.</div>
    </div>
        <div className="menu">
        <li> <span><RxDashboard/></span>Dashboard</li>
        <li><span><BsPersonCircle/></span>Assets</li>
        <li><span><AiOutlineCar/></span>Booking</li>
        <li><span><BsBag/></span>Sell Cars</li>
        <li><span><AiOutlineShoppingCart/></span>Buy Cars</li>
        <li><span><BsScissors/></span>Services</li>
        <li><span><HiOutlineCalendar/></span>Calendar</li>
        <li><span><BiMessageDetail/></span>Messages</li>
        </div>
        </div>
        </>
    )
}

export default Sidebar
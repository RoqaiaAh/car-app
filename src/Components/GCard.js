 import {React } from "react";
import LineChart from "../Components/LineChart"
import "../styles/histogram.css"
import Hisogram from "./Hisogram";

const gCard =()=>{
    return(
        
 <div className="main-his">
    <div className="Histogram">
       <Hisogram/> 
       
    </div>  
    <div className="Histogram">
  <LineChart/>
  </div>
    </div>
    )
}

export default gCard;
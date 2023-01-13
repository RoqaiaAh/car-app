import {React } from "react";
import "../styles/dashboard.css"
import Cards from '../Components/Cards';
import GCard from "../Components/GCard";
import {RiFlashlightFill} from 'react-icons/ri';
import {CgArrowsVAlt} from 'react-icons/cg';
import {MdWaterDrop} from 'react-icons/md';
import {GiCarWheel} from 'react-icons/gi';
import CarCard from "../Components/CarCard";




const Dashboard =()=>{
    return(
        <>
       
        <div className="dash-main">
            <Cards icon ={<RiFlashlightFill/>} title={"Enrgy"} score={"45"} />
            <Cards icon ={<CgArrowsVAlt/>} title={"Range"} score={"157"}/>
            <Cards icon ={<MdWaterDrop/>} title={"Break fluid"} score={"9"} />
            <Cards icon ={<GiCarWheel/>} title={"Tire wear"} score={"25"} />
      </div>
            <GCard/>
            <CarCard/>
        </>
    )
}

export default Dashboard
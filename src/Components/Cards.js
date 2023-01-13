import { React } from "react";
import "../styles/dashboard.css"
import ReviewBar from "../Components/ReviewBar";

const Cards = (props) => {
    const title = props.title;
    const icon = props.icon;
    const color = props.color;
    const score = props.score;


    return (
        <>
            <div className="dashboard">
                <div className="dashboard-wrapper">
                    <div className="dashboard-cards">
                        <div className="single-card">
                            <div className="card-content">
                                <div className="percentage-flash" >
                                    <div className="flash">{icon}</div>
                                    <svg width="50px" height="50px">
                                        <circle cx="25px" cy="25px"
                                            strokeWidth="10px" r="15"  className="circle-flash" />
                                    </svg>
                                </div>  
                            </div>
                                <div className="txt">
                                    {title}
                                </div>
                                <div className="Review">
                                <svg width="80px" height="80px">
                                         <ReviewBar score={score} color={color} />
                                    </svg>
                                </div> 
                                 
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
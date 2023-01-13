import { React } from "react";
import "../styles/car-card.css"
import car1 from '../assets/img/car-1.png';
import car2 from '../assets/img/car-2.png';
import car3 from '../assets/img/car-3.png';

const CarCard = () => {
    return (
        <>
            <div className="car">
                <div className="car-wrapper">
                    <div className="car-cards">
                        <div className="single-car-card">
                            <div className="card-content">
                             <img src={car1} width="300px"/>
                            </div>
                        </div>
                        <div className="single-car-card">
                            <div className="card-content">
                             <img src={car2} width="300px"/>
                            </div>
                        </div>
                        <div className="single-car-card">
                            <div className="card-content">
                             <img src={car3} width="300px"/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarCard
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ReviewsProvider from "../Components/ReviewProvider";
import "../styles/dashboard.css"

const ReviewBar = (props) => {
    const {score } =props;
const calcColor =(percent , start , end) => {
    let a = percent/100,
    b=(end-start)*a,
    c=b+start;
    return 'hsl(' + c + ', 100%, 50%)';
}
    return (
        <ReviewsProvider valueStart={0} valueEnd={score} >
        {(value) => (
          <CircularProgressbar 
            value={value}
            text={`${value} %`}
            circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
            styles={{
              trail: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
             
                 
              },
              path: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: calcColor(value, 0, 16744071),
               
              },
              text: {
                fill: 'black',
              },
            }}
            strokeWidth={10}
          />
        )}
      </ReviewsProvider>
    )
}
export default ReviewBar
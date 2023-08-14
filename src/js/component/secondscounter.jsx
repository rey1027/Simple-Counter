import React from "react";
import { AiOutlineClockCircle} from "react-icons/ai";

// include your styles into the webpack bundle
import "../../styles/index.css";

const SecondsCounter = (props) => {
    return (
        <>
        <div className="bigCounter">
            <div className="logo">
             <AiOutlineClockCircle />
            </div>
            <div className="seconds six">{props.digitSix%10}</div>
            <div className="seconds five">{props.digitFive%10}</div>
            <div className="seconds four">{props.digitFour%10}</div>
            <div className="seconds three">{props.digitThree%10}</div>
            <div className="seconds two">{props.digitTwo%10}</div>
            <div className="seconds one">{props.digitOne%10}</div>
        </div>  
        </>
    );
};

export default SecondsCounter
import React from "react";
import { AiOutlineClockCircle} from "react-icons/ai";

// include your styles into the webpack bundle
import "../../styles/index.css";
const SecondsCounter = (props) => {
    const totalSeconds = props.counter;

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    return (
        <div className="bigCounter">
            <div className="logo">
                <AiOutlineClockCircle />
            </div>
            <div className="seconds six">{Math.floor(hours / 10)}</div>
            <div className="seconds five">{hours % 10}</div>
            <div className="seconds four">{Math.floor(minutes / 10)}</div>
            <div className="seconds three">{minutes % 10}</div>
            <div className="seconds two">{Math.floor(seconds / 10)}</div>
            <div className="seconds one">{seconds % 10}</div>
        </div>
    );
};

export default SecondsCounter
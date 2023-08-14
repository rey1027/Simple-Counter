//import react into the bundle
import React from "react";

import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import SecoundCounter from "./component/secondscounter.jsx"

//
let counter = 0
setInterval(()=>{
    let one = Math.floor(counter/1);
    let two = Math.floor(counter/10);
    let three = Math.floor(counter/100);
    let four = Math.floor(counter/1000);
    let five = Math.floor(counter/10000);
    let six = Math.floor(counter/1000000);
    counter = counter + 1;
    let app = document.querySelector("#app");
    app.classList.add("general");
//render your react application
    ReactDOM.render(<SecoundCounter digitOne={one} digitTwo={two} digitThree={three} digitFour= {four} digitFive={five} digitSix={six} />, document.querySelector("#app"));

},1000);



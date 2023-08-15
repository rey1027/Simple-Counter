//import react into the bundle
import React from "react";

import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import SecoundCounter from "./component/secondscounter.jsx"

let counter = 0
setInterval(()=>{
    counter = counter + 1;
    let app = document.querySelector("#app");
    app.classList.add("general");
//render your react application
    ReactDOM.render(<SecoundCounter counter={counter} />, document.querySelector("#app"));

},1000);



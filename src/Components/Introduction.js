import React from "react";
import Clock from "./Clock";
import Count from "./Count";

import "./Introduction.css";

export default Introduction;

function Name() {
    return <h1 className="name dark-blue">I am Jared Feingold.
        </h1>;
}

function Bio() {
    return <h1 className="bio dark-blue">I am a Software Engineer. I dabble in particle physics, and I am interested
    in social media platforms that cater to specific subcultures. In my free time I     train Guide Dogs. 
    </h1>
}
// HELLO
function Introduction() {
    return <div >
        <Name/>
        <div className='count dark-blue'>
            <Count/>
        </div>
        <Bio/> 
    </div>;
}
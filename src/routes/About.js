import React from "react";

function About(props){
    console.log(props);
    return (
        <div className ="about__container">
            <span>
                "Freedom is the freedom to say that two plus..."
            </span>
            <span> -George Orwell, 1984</span>
        </div>    
    );}

export default About;
import React from "react"
import Horizon from "../../horizon.svg"


const landingStyle = {
    backgroundImage: `url(${Horizon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 75%",
    backgroundSize: "contain"
}

function Landing(){
    return (
        <div className="Landing" style={landingStyle}>
            <h2>Picture of the Day </h2>
        </div>
    )
}

export default Landing;
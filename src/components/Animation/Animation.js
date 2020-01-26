import React from "react";
import Ship from "../../spaceship.svg";
import Cloud from "../../cloud.svg";
import "./Animation.scss"

const animationStyle = {
  //   backgroundImage: `url(${Horizon})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "50% 70%",
  //   backgroundSize: "contain"
};

function Animation() {
  return (
    <div className="Animation" style={animationStyle}>
      <img src={Cloud} className="cloud" alt="cloud" />
      <img src={Ship} id="ship" className="ship" alt="ship" />
      <img src={Cloud} className="cloud" alt="cloud" />
    </div>
  );
}

export default Animation;

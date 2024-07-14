import { FC } from "react";
import "../CSS/Wheel.css";
import { segments } from "../Constants/Constants";

const RouletteWheel:FC = () => {
   return (
      <div id="box1">
      <div id="border1Box">
         <div id="border1"></div>
         <div id="border2"></div>
         <div id="border3"></div>
         <div className="containter1">
            <div className="circular-progress">
               <span id="textSpin" className="textSpin">Next spin in</span>
               <div className="value-container"></div>
            </div>
         </div>
         <div id="spinTextBackgroundBox">
            <div id="spinTextBackground"></div>
         </div>
        </div>
        <div id="box2">
         <div id="rouletteWheel2">
          {segments.map((segment, index) => (
            <div key={index} className={segment}></div>
          ))}
         </div>
        </div>   
        <div id="picker"></div>
         <div id="rouletteWheel">
          {segments.map((segment, index) => (
            <div key={index} className={segment}></div>
          ))}
         </div>
      </div>
   );
}

export default RouletteWheel;
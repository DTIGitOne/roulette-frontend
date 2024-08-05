import React, { FC, useState, useEffect, useRef } from "react";
import "../CSS/Wheel.css";
import { segments } from "../Constants/Constants";
import { getWheelSpin } from "../Api/Api";

const RouletteWheel: FC = () => {
  const [timer, setTimer] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const valueContainerRef = useRef<HTMLDivElement>(null);
  const rouletteWheelRef = useRef<HTMLDivElement>(null);
  const rouletteWheel2Ref = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const token = localStorage.getItem('authorization');

  const getSpin = async () => {
    try {
      const response = await getWheelSpin(token)

      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSpin();

    let progressEndValue = 100;
    let totalDuration = 25000; // Total duration in milliseconds
    let steps = 1000; // Number of steps

    let interval = totalDuration / steps;

    let progressValue = 0;
    let elapsedTime = 0;
    let isTimerZero = false;

    const progressBar = progressBarRef.current;
    const rouletteWheel = rouletteWheelRef.current;
    const rouletteWheel2 = rouletteWheel2Ref.current;
    const root = rootRef.current;

    let animationInterval: NodeJS.Timeout; // Declare animationInterval in the outer scope

    function animateProgress() {
      animationInterval = setInterval(() => {
        progressValue += 0.1;
        elapsedTime += interval;

        let remainingSeconds = Math.round((totalDuration - elapsedTime) / 1000);
        if (remainingSeconds > -0.2) {
          setTimer(remainingSeconds);
        } else {
          if (!isTimerZero) {
            setTimer(0);
            isTimerZero = true;
          }
        }

        if (progressBar) {
          progressBar.style.background = `conic-gradient(
            transparent ${progressValue * (360 / progressEndValue)}deg,
            #06fa8a ${progressValue * (360 / progressEndValue)}deg
          )`;
        }

        if (Math.abs(progressValue - progressEndValue) < 0.001) {
          setSpinning(true);

          if (root) {
            root.style.setProperty('--deg', '1800deg');
            root.style.setProperty('--deg2', '-2080deg');
          }
          if (rouletteWheel) {
            rouletteWheel.style.animationName = "spin";
          }
          if (rouletteWheel2) {
            rouletteWheel2.style.animationName = "spinInner";
          }

          setTimeout(() => {
            if (rouletteWheel) {
              rouletteWheel.style.animationName = "";
            }
            if (rouletteWheel2) {
              rouletteWheel2.style.animationName = "";
            }
            progressValue = 0;
            elapsedTime = 0;
            setSpinning(false);
            animateProgress();
          }, 15000);

          clearInterval(animationInterval);
        }
      }, interval);
    }

    animateProgress();

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const getRotationStyle = (index: number) => {
    let size1 = index * 9;
    return { transform: `rotate(${size1}deg)` };
  };

  return (
    <div id="box1" ref={rootRef}>
      <div id="border1Box">
        <div id="border1"></div>
        <div id="border2"></div>
        <div id="border3"></div>
        <div className="containter1">
          <div className="circular-progress" ref={progressBarRef}>
            <span id="textSpin" className="textSpin">{spinning ? "Spinning" : "Next spin in"}</span>
            <div className="value-container" ref={valueContainerRef}>{spinning ? null : timer}</div>
          </div>
        </div>
        <div id="spinTextBackgroundBox">
          <div id="spinTextBackground"></div>
        </div>
      </div>
      <div id="box2">
        <div id="rouletteWheel2" ref={rouletteWheel2Ref}>
          {segments.map((segment, index) => (
            <div key={index} className={`segment ${segment}`} style={getRotationStyle(index)}></div>
          ))}
        </div>
      </div>
      <div id="picker">
        <div className=" relative" style={{zIndex: "9999"}}>
         <span id="pickerLine"></span>
        </div>
      </div>
      <div id="rouletteWheel" ref={rouletteWheelRef}>
        {segments.map((segment, index) => (
          <div key={index} className={`segment ${segment}`} style={getRotationStyle(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default RouletteWheel;

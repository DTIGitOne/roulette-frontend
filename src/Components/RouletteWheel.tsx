import { FC, useState, useEffect, useRef } from "react";
import "../CSS/Wheel.css";
import { segments } from "../Constants/Constants";
import { RouletteWheelProps } from "../Interface/Interface";

const RouletteWheel: FC<RouletteWheelProps> = ({ currentTimer, newInner, newOuter, pastInner, pastOuter }) => {
  const [timer, setTimer] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const valueContainerRef = useRef<HTMLDivElement>(null);
  const rouletteWheelRef = useRef<HTMLDivElement>(null);
  const rouletteWheel2Ref = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef(newOuter);
  const innterRef = useRef(newInner);
  const isInitialized = useRef(false);

  useEffect(() => {
    outerRef.current = newOuter;
    innterRef.current = newInner;
  }, [newOuter, newInner]);

  useEffect(() => {
    console.log(currentTimer);

    let duration = 20000; // Default duration for looping
    if (!isInitialized.current) {
      // Use initial duration for the first spin
      duration = currentTimer - 15000;
      isInitialized.current = true;
    }

    let totalDuration = duration;
    let isTimerZero = false;

    let current = 1;
    let numberOuter = outerRef.current;
    let numberInnter = innterRef.current;
    let rand = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1); 
    let rand2 = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1);

    const rouletteWheel = rouletteWheelRef.current;
    const rouletteWheel2 = rouletteWheel2Ref.current;
    const root = rootRef.current;

    let spinOuter = (Math.abs(40 - current + numberOuter)) * 9 + rand + 1440;
    let spinInner = (Math.abs(40 - current + numberInnter)) * 9 + rand2 + 1440;

    let progressEndValue = 100;
    let steps = 1000; // Number of steps for loading

    let interval = totalDuration / steps;

    let progressValue = 0;
    let elapsedTime = 0;

    const progressBar = progressBarRef.current;

    let animationInterval: number; // Use number instead of NodeJS.Timeout

    function animateProgress() {
      animationInterval = window.setInterval(() => {
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

          // Update the custom properties dynamically
          if (root) {
            root.style.setProperty('--deg', `${spinOuter}deg`);
            root.style.setProperty('--deg2', `${-spinInner}deg`);
          }
          if (rouletteWheel) {
            rouletteWheel.style.animationName = "spin";
          }
          if (rouletteWheel2) {
            rouletteWheel2.style.animationName = "spinInner";
          }

          window.setTimeout(() => {
            if (rouletteWheel) {
              rouletteWheel.style.animationName = "";
            }
            if (rouletteWheel2) {
              rouletteWheel2.style.animationName = "";
            }

            // Update current rotation to final rotation value
            progressValue = 0;
            elapsedTime = 0;
            setSpinning(false);
            animateProgress();
          }, 15000);

          window.clearInterval(animationInterval);
        }
      }, interval);
    }

    // Start animation after initial timeout or immediately if already initialized
    if (!isInitialized.current) {
      if (currentTimer <= 15000) {
        console.log(`currentTimer:${currentTimer}`)
        if (root) {
          console.log(`pastInner:${pastOuter}`);
          console.log(`pastOuter:${pastInner}`);
          root.style.setProperty('--deg', `${pastOuter}deg`);
          root.style.setProperty('--deg2', `${-pastInner}deg`);
        }
      }

      window.setTimeout(() => {
        animateProgress();
      }, currentTimer - 15000);
    } else {
      animateProgress();
    }

    // Cleanup function
    return () => {
      window.clearInterval(animationInterval);
    };
  }, [currentTimer, newInner, newOuter]);

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
        <div id="picker"></div>
        <span id="pickerLine"></span>
      <div id="rouletteWheel" ref={rouletteWheelRef}>
        {segments.map((segment, index) => (
          <div key={index} className={`segment ${segment}`} style={getRotationStyle(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default RouletteWheel;

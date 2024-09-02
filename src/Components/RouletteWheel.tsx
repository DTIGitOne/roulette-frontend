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
  const [outerRef, setOuterRef] = useState<number | null>(null);
  const [innerRef, setInnerRef] = useState<number | null>(null);

  function animateProgress(timer: number) {
    console.log(timer);
    let duration = timer; // loop timer before animation
    
    let totalDuration = duration; // variable for the duration
    let isTimerZero = false; // change text when timer is true

    let progressEndValue = 100; // what is the final % for the loader 
    let steps = 1000; // Number of steps for loading

    let interval = totalDuration / steps; // speed of the loader 

    let progressValue = 0;
    let elapsedTime = 0;

    const progressBar = progressBarRef.current;

    let animationInterval: number; // Use number instead of NodeJS.Timeout

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
        

        window.clearInterval(animationInterval);
      }
    }, interval);

    return () => {
      window.clearInterval(animationInterval);
      progressValue = 0;
      elapsedTime = 0;
    };
  }

  function spinWheel(newSelectedInner: number | null, newselectedOuter: number | null) {
    let duration = 20000; // loop timer before animation
    
    let totalDuration = duration; // variable for the duration
    let isTimerZero = false; // change text when timer is true

    let current = 1;
    let rand = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1); // add random effect for random color (few degreess of the center segment)
    let rand2 = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1);

    const rouletteWheel = rouletteWheelRef.current; // wheelRefs
    const rouletteWheel2 = rouletteWheel2Ref.current;
    const root = rootRef.current;

    let LastSpinOuter = (Math.abs(40 - current + pastOuter)) * 9 + rand + 1440; // calculate degresss for selected segment (past spin result)
    let LastSpinInner = (Math.abs(40 - current + pastInner)) * 9 + rand2 + 1440;

    let animationInterval: number; // Use number instead of NodeJS.Timeout

    animationInterval = window.setInterval(() => {

      if (newselectedOuter !== null && newSelectedInner !== null) {

        let numberOuter = newselectedOuter;
        let numberInnter = newSelectedInner;

        let spinOuter = (Math.abs(40 - current + numberOuter)) * 9 + rand + 1440; // calculate degresss for selected segment
        let spinInner = (Math.abs(40 - current + numberInnter)) * 9 + rand2 + 1440;
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

          animateProgress(20000);

          // Update current rotation to final rotation value
          setSpinning(false);
        }, 15000);

        window.clearInterval(animationInterval);
      }
    });

    return () => {
      window.clearInterval(animationInterval);
    };
  }

  useEffect(() => {
    setOuterRef(newOuter);
    setInnerRef(newInner);

    console.log(`new Outer:${outerRef}`);
    console.log(`new Inner:${innerRef}`);
  
    spinWheel(innerRef, outerRef);
  }, [newOuter, newInner]);

  useEffect(() => {
    let current = 1;
    let rand = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1); // add random effect for random color (few degreess of the center segment)
    let rand2 = (Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1);

    const root = rootRef.current;

    let LastSpinOuter = (Math.abs(40 - current + pastOuter)) * 9 + rand + 1440; // calculate degresss for selected segment (past spin result)
    let LastSpinInner = (Math.abs(40 - current + pastInner)) * 9 + rand2 + 1440;

    console.log("remounted");
    if (currentTimer >= 20001) {
      if (root) {
        root.style.setProperty('--deg3', `${LastSpinOuter}deg`);
        root.style.setProperty('--deg4', `${-LastSpinInner}deg`);
      }

      window.setTimeout(() => {
        console.log("code executed");
        if (root) {
          root.style.setProperty('--deg3', `${0}deg`);
          root.style.setProperty('--deg4', `${-0}deg`);
        }
        animateProgress(20000);
      }, currentTimer - 20000);
    } else if (currentTimer <= 20000) {
      const time = currentTimer;
      console.log(time);
      animateProgress(time);
    }
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

import { FC, useEffect, useState } from "react";
import { ROUTES } from "../Constants/Constants";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Roulette from "../Sites/Roulette";
import LoginPage from "../Sites/Login";
import SignupPage from "../Sites/Signup";
import ProfilePage from "../Sites/Profile";
import DepositPage from "../Sites/Deposit";
import WithdrawPage from "../Sites/Withraw";
import WithdrawEmailPage from "../Sites/WithdrawEmail";
import CardDepositPage from "../Sites/CardDeposit";
import NeonIcon from "../SVG/NeonSpin";

const App:FC = () => {
  const [componentKey, setComponentKey] = useState(0);
  const [siteLoad, setSiteLoad] = useState(0);
  const [animationNameCur, setAnimationNameCur] = useState("fadeInLogo");

  useEffect(() => {
     if (siteLoad > 0) {
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          // Increment the key to force re-render
          setComponentKey((prevKey) => prevKey + 1);
        }
      };
  
      document.addEventListener("visibilitychange", handleVisibilityChange);
  
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    } else if (siteLoad === 0) {
      window.setTimeout(() => {
        const handleVisibilityChange = () => {
          if (document.visibilityState === "visible") {
            // Increment the key to force re-render
            setComponentKey((prevKey) => prevKey + 1);
          }
        };
    
        document.addEventListener("visibilitychange", handleVisibilityChange);

        setSiteLoad(1);
    
        return () => {
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
      }, 3000);
    }

  }, []);

  return (
    <>
    {siteLoad ? (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="Roulette" />} />
        <Route path={ROUTES.Roulette} element={<Roulette key={componentKey} />} />
        <Route path={ROUTES.Login} element={<LoginPage />} />
        <Route path={ROUTES.Signup} element={<SignupPage />} />
        <Route path={ROUTES.Profile} element={<ProfilePage />} />
        <Route path={ROUTES.Deposit} element={<DepositPage />} /> 
        <Route path={ROUTES.Withdraw} element={<WithdrawPage />} />
        <Route path={ROUTES.WithdrawEmailPage} element={<WithdrawEmailPage />} />
        <Route path={ROUTES.CardDepositPage} element={<CardDepositPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    ) : (
    <div className='h-screen w-screen flex justify-center items-center' style={{background: "linear-gradient(187deg, rgb(34, 39, 59) 0%, #161D27 100%)"}}>
      <NeonIcon aniName={animationNameCur}/>
    </div>
    )}
    </>
  );
}

export default App;

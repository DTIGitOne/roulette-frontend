import { FC } from "react";
import { ROUTES } from "../Constants/Constants";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Roulette from "../Sites/Roulette";
import LoginPage from "../Sites/Login";
import SignupPage from "../Sites/Signup";
import ProfilePage from "../Sites/Profile";
import DepositPage from "../Sites/Deposit";
import WithdrawPage from "../Sites/Withraw";

const App:FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="Roulette" />} />
        <Route path={ROUTES.Roulette} element={<Roulette />} />
        <Route path={ROUTES.Login} element={<LoginPage />} />
        <Route path={ROUTES.Signup} element={<SignupPage />} />
        <Route path={ROUTES.Profile} element={<ProfilePage />} />
        <Route path={ROUTES.Deposit} element={<DepositPage />} />
        <Route path={ROUTES.Withdraw} element={<WithdrawPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

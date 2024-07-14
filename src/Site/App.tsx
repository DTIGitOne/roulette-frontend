import { FC } from "react";
import { ROUTES } from "../Constants/Constants";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Roulette from "../Sites/Roulette";

const App:FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="Roulette" />} />
        <Route path={ROUTES.Roulette} element={<Roulette />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

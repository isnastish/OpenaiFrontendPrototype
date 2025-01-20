import "./App.css";
import LoginPresenter from "./components/pages/LoginPage/LoginPresenter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* In react router v6 we should specify multiple routes, 
        we cannot put paths into {}, or we could use useRoutes hook. */}
        <Route path="/login" element={<LoginPresenter />} />
        <Route path="/" element={<LoginPresenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

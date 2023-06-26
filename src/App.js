import Header from "./components/Header";

import Main from "./pages/Main";
import MonthlyCalendar from "./pages/MonthlyCalendar";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";

import "./App.css";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (

    <div>
      <Header /> 
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/monthlycalendar" element={<MonthlyCalendar />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

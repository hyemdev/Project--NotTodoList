import Header from "./components/Header";
import MemoSection from "./components/MemoSection";
import DailySection from "./components/DailySection";
import BriefSection from "./components/BriefSection";

import Main from "./pages/Main";
import MonthlyCalendar from "./pages/MonthlyCalendar";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Enterance from "./pages/Enterance";

import "./App.css";
import { Route, Routes } from "react-router";
import { Footer } from "antd/es/layout/layout";
import { useState } from "react";
import MonthlyAdd from "./pages/MonthlyAdd";

function App() {  
  const initTodoData = [];
  const [todoData, setTodoData] = useState(initTodoData);

  return (
    <div className="w-screen h-screen overflow-x-hidden float-left">
      <div className="p-5 h-full">
        <Routes>
          <Route path="/" element={<Enterance />} />
          <Route element={<Header />}>
            <Route index path="/main" element={<Main todoData={todoData} setTodoData={setTodoData}/>}></Route>
            <Route
              path="/monthlycalendar"
              element={<MonthlyCalendar todoData={todoData} setTodoData={setTodoData}/>}
            ></Route>
            <Route path="/summary" element={<Summary />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/memosection" element={<MemoSection />} />
            <Route path="/briefsection" element={<BriefSection />} />
            <Route path="/dailysection" element={<DailySection todoData={todoData} setTodoData={setTodoData}/>} />
            <Route path="/monthlyadd" element={<MonthlyAdd />} />
          </Route>
          <Route element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

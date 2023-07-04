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
import { useEffect, useState } from "react";
import MonthlyAdd from "./pages/MonthlyAdd";
import { getTodo } from "./api/api";
import CalendarDayList from "./pages/CalenderDayList";

function App() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    //axios get하는 자리
    getTodo(setTodoData);
    console.log("setTodoData", setTodoData);
    console.log("todoData", todoData);
  }, []);

  useEffect(() => {
    console.log("setTodoData", todoData);
  }, [todoData]);

  return (
    <div className="w-screen h-screen overflow-x-hidden float-left">
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Enterance />} />
          <Route element={<Header />}>
            <Route
              index
              path="/main"
              element={<Main todoData={todoData} setTodoData={setTodoData} />}
            ></Route>
            <Route
              path="/monthlycalendar"
              element={
                <MonthlyCalendar
                  todoData={todoData}
                  setTodoData={setTodoData}
                />
              }
            ></Route>
            <Route path="/summary" element={<Summary />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/memosection" element={<MemoSection />} />
            <Route path="/briefsection" element={<BriefSection />} />
            <Route
              path="/dailysection"
              element={
                <DailySection todoData={todoData} setTodoData={setTodoData} />
              }
            />
            <Route
              path="/monthlyadd"
              element={
                <MonthlyAdd todoData={todoData} setTodoData={setTodoData} />
              }
            />
            <Route
              path="/calendardaylist"
              element={
                <CalendarDayList />
              }
            />
          </Route>
          <Route element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

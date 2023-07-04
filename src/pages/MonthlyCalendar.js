import React, { useEffect, useState } from "react";
import moment from "moment/moment";

import { Calendar } from "react-calendar";
import Modal from "react-modal";

import "../style/CalendarCSS.css";
import {
  MonthlyCalendarDiv,
  MonthlyCalendarWrap,
} from "../style/MonthlyCalendarCSS";
import CalendarDayList from "./CalenderDayList";
import { getCalendarTodo } from "../api/api";

const MonthlyCalendar = ({ todoData, setTodoData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [day, setDay] = useState(new Date());

  //CalendarDayList 에 출력시켜줄 state
  const [clickItems, setClickItems] = useState([]);
  const [clickDate, setClickDate] = useState([]);
  const [monthData, setMonthData] = useState([]);

  useEffect(() => {
    getCalendarTodo(setMonthData, DefalutMonth);
  }, []);
  const DefalutMonth = moment(day).format("YYYY-MM");
  console.log("DefalutMonth", DefalutMonth);

  // 상세보기 모달창
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClickDay = (value, event) => {
    showModal();

    let ClickDay = moment(value).format("YYYY-MM-DD");
    let DayFilterItem = todoData.filter(item => item.date === ClickDay);
    setClickItems(DayFilterItem);
    setClickDate(ClickDay);

    const div = event.currentTarget.querySelector("div");
    if (div !== null) {
      // console.log("value2", value);
    }
  };

  //calendar 내용 출력하기 기능
  const showScheduleJSX = ({ date, view }) => {
    // 포맷을 YYYY-MM-DD로 변경한다
    let DefalutDay = moment(date).format("YYYY-MM-DD");
    let results = monthData.filter(item => {
      if (item.date === DefalutDay) {
        return item;
      }
    });
    // console.log("results", results);
    if (results.length > 0) {
      return results.map((result,index) => (
        <div
          key={index}
          className="bg-slate-500 border-dotted rounded-md my-1"
        >
          <div className="text-slate-50">{result.name}</div>
        </div>
      ));
    }
  };

  return (
    <div>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleOk}
          contentLabel="모달"
          style={{
            content: {
              width: "70%",
              height: "50%",
              margin: "auto",
              borderRadius: "20px",
            },
          }}
        >
          <div>
            <h2>daily 상세내역 출력 {clickDate}</h2>
            <CalendarDayList
              clickItems={clickItems}
              clickDate={clickDate}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="mt-10 py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={handleCancel}
            >
              CLOSE
            </button>
          </div>
        </Modal>
      </div>

      <MonthlyCalendarWrap>
        <MonthlyCalendarDiv>
          <Calendar
            //날짜 클릭했을 때 이벤트핸들러
            onClickDay={(value, event) => handleClickDay(value, event)}
            onChange={setDay}
            value={day}
            // 일요일부터 출력하도록 설정하기
            calendarType="US"
            formatDay={(locale, date) => moment(date).format("D")}
            tileContent={showScheduleJSX}
          />
        </MonthlyCalendarDiv>
      </MonthlyCalendarWrap>
    </div>
  );
};

export default MonthlyCalendar;

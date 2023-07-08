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

  const getCalendarTodoData = async _month => {
    const result = await getCalendarTodo(_month);
    setMonthData(result);
  };
  useEffect(() => {
    getCalendarTodoData(moment(day).format("YYYY-MM"));
    console.log("페이지 리랜더링");
  }, [isModalOpen]);
  // const DefalutMonth = moment(day).format("YYYY-MM");

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

  // 클릭했을 때 그날의 날짜 data넘기기
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

  //상단 네비게이션에서 월 클릭 했을 때
  const handleNavClickMonth = (value, event) => {
    let clickMonth = moment(value).format("YYYY-MM");
    getCalendarTodoData(clickMonth);
    console.log("clickMonth11", clickMonth);
  };

  //이전,다음버튼 눌러서 월 정보 불러오기
  const handleArrowClickMonth = (value, event) => {
    let clickMonth = moment(value.activeStartDate).format("YYYY-MM");
    getCalendarTodoData(clickMonth);
    console.log("clickMonth22", clickMonth);
  };

  //calendar에 title 출력하기 기능
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
      return (
        <div style={{height: "110px", maxHeight:"110px", overflowY:"auto"}}>
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-slate-500 border-dotted rounded-md my-0.5"
            >
              <div className="text-slate-50">{result.name}</div>
            </div>
          ))}
        </div>
      );
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
              width: "60%",
              maxWidth: "750px",
              height: "600px",
              margin: "auto",
              borderRadius: "20px",
            },
          }}
        >
          <div>
            <h2>Daily 상세내역 : {clickDate}</h2>
            <CalendarDayList
              clickItems={clickItems}
              clickDate={clickDate}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="py-2 px-4 bg-amber-500 hover:bg-amber-400 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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
            // 상단 네비게이션에서 월 클릭했을 때
            onClickMonth={(value, event) => handleNavClickMonth(value, event)}
            // 이전 다음 버튼클릭해서 월 정보 넘기기
            onActiveStartDateChange={(value, event) =>
              handleArrowClickMonth(value, event)
            }
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

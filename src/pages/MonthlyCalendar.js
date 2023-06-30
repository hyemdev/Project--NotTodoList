import React, { useState } from "react";
import moment from "moment/moment";

import { Calendar } from "react-calendar";
import { Modal } from "antd";

import "../style/Calendar.css";

const MonthlyCalendar = ({ todoData, setTodoData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [day, setDay] = useState(new Date());

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
    console.log(event.currentTarget);

    const div = event.currentTarget.querySelector("div");
    if (div !== null) {
      console.log(value);
    }
  };

  //calendar 내용 출력하기 기능
  const showScheduleJSX = ({ date, view }) => {
    // 포맷을 YYYY-MM-DD로 변경한다
    let DefalutDay = moment(date).format("YYYY-MM-DD");
    let results = todoData.filter(item => {
      if (item["dateArray[]"].includes(DefalutDay)) {
        console.log("날짜가 같아요, 화면에 내용 출력");
        return item;
      }
    });
    if (results.length > 0) {
      return results.map(result => (
        <div key={result.id}>
          <div>{result.title}</div>
          {/* <div>{result.options}</div> */}
          {/* <div>{result.goalNumber}</div> */}
        </div>
      ));
    }
  };

  return (
    <>
      <div className="mt-10">
        <Modal
          title="상세보기"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <>
            <div>
              <h2>daily 상세내역 출력</h2>
              title / option / number / 수정버튼 / 삭제버튼
            </div>
          </>
        </Modal>
      </div>

      <div>
        <div className="container w-1200 mx-auto">
          <label>목표 달력:</label>
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
          <div>{moment(day).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    </>
  );
};

export default MonthlyCalendar;

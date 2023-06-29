import Modal from "react-modal";
import moment from "moment";
import React, { useEffect, useState } from "react";
import MonthlyAdd from "../pages/MonthlyAdd";

const DailySection = ({initTodoData, todoData, setTodoData }) => {
  //월간목표 추가하기용 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 임시데이터 (추후에 json server랑 연동필요함)
  const tempDate = [
    {
      id: "1687999001371",
      title: "목표목표",
      options: "price",
      goalNumber: "20000",
      completed: "false",
      startDate: "2023-06-29",
      endDate: "2023-07-31",
      "dateArray[]": [
        "2023-06-29",
        "2023-06-30",
        "2023-07-01",
        "2023-07-02",
        "2023-07-03",
        "2023-07-04",
        "2023-07-05",
        "2023-07-06",
        "2023-07-07",
        "2023-07-08",
        "2023-07-09",
      ],
    },
    {
      id: "1687999017971",
      title: "목표목표목표목표",
      options: "time",
      goalNumber: "20",
      completed: "false",
      startDate: "2023-06-29",
      endDate: "2023-06-30",
      "dateArray[]": ["2023-06-29", "2023-06-30"],
    },
    {
      id: "1687999033059",
      title: "not to do",
      options: "time",
      goalNumber: "80",
      completed: "false",
      startDate: "2023-06-29",
      endDate: "2023-06-30",
      "dateArray[]": ["2023-06-29", "2023-06-30"],
    },
  ];

  // 월간목표 추가하기용 모달창
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Daily not todo list 출력
  const showNotTodoList = () => {
    // 오늘날짜 포맷에 맞게 출력하기
    const todayDate = moment().format("YYYY-MM-DD");
    // 오늘날짜와 일치하는 자료만 찾아서 배열로 만들자
    const matchingDates = tempDate[0]["dateArray[]"].filter(
      date => date === todayDate,
    );

    let results = tempDate.filter(item =>
      matchingDates.includes(item.startDate),
    );

    if (results.length > 0) {
      return results.map(item => (
        <div key={item.id}>
          <div className="flex justify-around items-center text-center w-full p-2 bg-blue-100 rounded-lg dark:bg-white my-2">
            <div>{item.title}</div>
            <div>{item.options}</div>
            <div>{item.goalNumber}</div>
            <button className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              수정
            </button>
          </div>
        </div>
      ));
    }
  };
  useEffect(() => {
    // setTodoDate(tempDate)
    showNotTodoList();
    // axios get호출 todolist data 받기
    // getTodo(setTodoData);
  });

  return (
    <div className="h-full bg-slate-100 rounded-md p-10">
      <h2>Daily Not todo list</h2>
      <span> today :{/* {todayDate} */}</span>
      <div>
        {/* today not todo list 출력창 */}
        {showNotTodoList()}
      </div>
      <div className="flex justify-center items-end mt-20">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="모달"
          style={{
            content: {
              width: "70%",
              height: "50%",
              margin: "auto",
              textAlign: "center",
            },
          }}
        >
          <h1>
            <MonthlyAdd initTodoData={initTodoData} todoData={todoData} setTodoData={setTodoData}/>
          </h1>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="mt-10 py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </Modal>
      </div>
      <div className="flex flex-col items-center justify-end mt-10">
        <button
          onClick={openModal}
          className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          새항목 추가하기
        </button>
      </div>
    </div>
  );
};

export default DailySection;

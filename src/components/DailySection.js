import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import MonthlyAdd from "../pages/MonthlyAdd";

const DailySection = ({ initTodoData, todoData, setTodoData }) => {
  //월간목표 추가하기용 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 데일리낫투두 수정 관련 state
  const [dailyEdit, setDailyEdit] = useState(false);
  const [dailyEditAddNum, setDailyEditAddNum] = useState(false);

  // 오늘의 날짜
  const isToday = moment().format("YYYY-MM-DD");
  console.log(isToday);

  // 월간목표 추가하기용 모달창
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Daily not todo list 출력
  const showNotTodoList = () => {
    if (todoData) {
      // 오늘날짜 포맷에 맞게 출력하기
      const todayDate = moment().format("YYYY-MM-DD");
      console.log("todayDate", todayDate);
      // 오늘날짜와 일치하는 자료만 찾아서 배열로 만들자
      const matchingDates = todoData.filter(
        item => item["dateArray[]"] == todayDate,
      );
      // todayDate()
      console.log("matchingDates", matchingDates); // 오늘과 일치하는 날짜를 포함하는 배열 출력
      // matchingDates();

      console.log(todoData["dateArray[]"]);

      if (matchingDates.length > 0) {
        return matchingDates.map(item => (
          <div key={item.id}>
            <div className="flex justify-around items-center text-center w-full p-2 bg-blue-100 rounded-lg dark:bg-white my-2">
              <div className="w-1/2">{item.title}</div>
              <div>{item.options}</div>
              <button
                onClick={handleEditClick}
                className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                수정
              </button>
            </div>
          </div>
        ));
      }
    }
  };

  // 이벤트 핸들러
  //선택편집(버튼활성화하기)
  const handleEditClick = _id => {
    console.log("handleEdit_id", _id);
    setDailyEdit(true);
  };
  const handleDailySaveClick = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.dailyAddNumber = dailyEditAddNum;
      }
      return item;
    });
    setTodoData(newTodoData);

    // patchDailyAddNum(_id, { ...item });
    setDailyEdit(false);
  };

  // 일일수량 변경
  const handleDailyNumEditChange = e => {
    setDailyEditAddNum(e.target.value);
  };

  // 일일수량 변경 취소
  const handleDailyCancelClick = () => {
    setDailyEdit(false);
  };

  //
  useEffect(() => {
    showNotTodoList();
  }, []);

  if (dailyEdit) {
    // 수정중인 상태
    return (
      <div>
        <div>{todoData.title}</div>
        <div>누적숫자</div>
        <div>{todoData.options}</div>
        <div>{todoData.goalNumber}</div>
        <input
          className="font-bold text-indigo-950"
          type="number"
          defaultValue={dailyEditAddNum}
          onChange={handleDailyNumEditChange}
        />
        <button
          onClick={() => handleDailySaveClick(todoData.id)}
          className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          저장
        </button>
        <button
          onClick={handleDailyCancelClick}
          className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          취소
        </button>
      </div>
    );
  } else {
    //  평소상태
    return (
      <>
        <div>
          <h2>DailyNotTodo</h2>
          <span> today :{isToday}</span>
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
                <MonthlyAdd todoData={todoData} setTodoData={setTodoData} />
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
              월간목표 설정하기
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default DailySection;

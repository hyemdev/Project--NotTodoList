import React, { useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import MonthlyAdd from "../pages/MonthlyAdd";
import {
  DailyListDiv,
  DailySectionTitle,
  DailyTable,
  DailyTableThBtn,
  DailyTableThNumber,
  DailyTableThTitle,
  DailyTableThead,
  DailyTableTr,
} from "../style/DailySectionCSS";
import DailyList from "./DailyList";
import { AddModalClose, Dddd } from "../style/MonthlyAddCSS";

const DailySection = ({ todoData, setTodoData }) => {
  //월간목표 추가하기용 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  //  평소상태
  return (
    <>
      <div>
        <DailySectionTitle>DailyNotTodo</DailySectionTitle>
        <span> today :{isToday}</span>
        <div>
          <DailyTable>
            <DailyTableThead>
              <DailyTableTr>
                <DailyTableThTitle>목표</DailyTableThTitle>
                <DailyTableThNumber>목표수량</DailyTableThNumber>
                <DailyTableThNumber>누적수량</DailyTableThNumber>
                <DailyTableThNumber>오늘수량</DailyTableThNumber>
                <DailyTableThBtn></DailyTableThBtn>
              </DailyTableTr>
            </DailyTableThead>
          </DailyTable>
          {/* today list 출력창 */}
          <DailyListDiv>

            <DailyList todoData={todoData} setTodoData={setTodoData} />
            
          </DailyListDiv>

        </div>
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="모달"
            style={{
              content: {
                width: "70%",
                height: "60%",
                margin: "auto",
                borderRadius: "20px",
              },
            }}
          >
            <h1>
              <MonthlyAdd todoData={todoData} setTodoData={setTodoData} />
            </h1>
            <AddModalClose>
              <button
                type="button"
                className="mt-5 py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                onClick={closeModal}
              >
                CLOSE
              </button>
            </AddModalClose>
          </Modal>
        </div>
        <div className="flex flex-col items-center justify-end mt-10">
          <button
            onClick={openModal}
            className="w-80 py-3 px-3 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-bold text-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            월간목표 설정하기
          </button>
        </div>
      </div>
    </>
  );
};

export default DailySection;

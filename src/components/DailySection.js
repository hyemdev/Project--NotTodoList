import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import MonthlyAdd from "../pages/MonthlyAdd";
import {
  DailyDate,
  DailyListWrap,
  DailyScroll,
  DailySectionTitle,
  DailyTable,
  DailyTableThBtn,
  DailyTableThNumber,
  DailyTableThTitle,
  DailyTableThead,
  DailyTableTr,
} from "../style/DailySectionCSS";
import DailyList from "./DailyList";
import { AddModalClose } from "../style/MonthlyAddCSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    console.log("페이지 리랜더링");
  }, [isModalOpen, setTodoData]);

  //  평소상태
  return (
    <div>
      <DailySectionTitle><FontAwesomeIcon icon={faUserXmark} /> 오늘의 Not Todo List</DailySectionTitle>
      <DailyDate> today : {isToday}</DailyDate>
        <DailyTable>
          <DailyTableThead>
              <DailyTableThTitle> 오늘의 나쁜행동 </DailyTableThTitle>
              <DailyTableThNumber>Dead Line</DailyTableThNumber>
              <DailyTableThNumber>Bad Gauge</DailyTableThNumber>
              {/* <DailyTableThNumber>오늘수량</DailyTableThNumber> */}
              <DailyTableThBtn></DailyTableThBtn>
          </DailyTableThead>
          <DailyListWrap>
            {/* today list 출력창 */}
            {/* <DailyListDiv> */}
            <DailyList todoData={todoData} setTodoData={setTodoData} />
            {/* </DailyListDiv> */}
          </DailyListWrap>
        </DailyTable>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="모달"
          style={{
            content: {
              width: "800px",
              height: "700px",
              margin: "auto",
              borderRadius: "20px",
            },
          }}
        >
          <MonthlyAdd todoData={todoData} setTodoData={setTodoData} />
          <AddModalClose>
            <button
              type="button"
              className="mt-5 py-2 px-4 mx-1 bg-amber-400 hover:bg-amber-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={closeModal}
            >
              CLOSE
            </button>
          </AddModalClose>
        </Modal>
      </div>
      <div className="flex flex-col items-center justify-end mt-6">
        <button
          onClick={openModal}
          className="w-80 py-3 px-3 mb-4 bg-amber-400 hover:bg-amber-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white transition ease-in duration-200 text-center font-bold text-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          월간목표 설정하기
        </button>
      </div>
    </div>
  );
};

export default DailySection;

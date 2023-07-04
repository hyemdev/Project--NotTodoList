import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  DailyEditListBtn,
  DailyEditListNumber,
  DailyEditListTitle,
  DailyEditListTr,
  DailyListBtn,
  DailyListNumber,
  DailyListTitle,
  DailyListTr,
  DailyListWrap,
} from "../style/DailySectionCSS";
// import { patchDailyAddNum } from "../api/api";

const DailyList = ({ todoData, setTodoData }) => {
  // 데일리낫투두 수정 관련 state
  const [dailyEdit, setDailyEdit] = useState(false);
  const [dailyEditTodayNum, setDailyEditTodayNum] = useState(0);

  // Daily not todo list 출력
  const showNotTodoList = () => {
    if (todoData) {
      // 오늘날짜 포맷에 맞게 출력하기
      const todayDate = moment().format("YYYY-MM-DD");
      console.log(typeof todayDate);
      // console.log(todoData[0]["dateArray[]"])
      // 오늘날짜와 일치하는 자료만 찾아서 배열로 만들자
      const matchingDates = todoData
        ? todoData.filter(
            item => item.date === todayDate,
          )
        : [];
      // todayDate()
      console.log("matchingDates", matchingDates); // 오늘과 일치하는 날짜를 포함하는 배열 출력
      // matchingDates();

      if (matchingDates.length > 0) {
        return matchingDates.map(item => (
          <div key={item.id}>
            <DailyListWrap>
              <DailyListTr>
                <DailyListTitle>{item.title}</DailyListTitle>
                <DailyListNumber>{item.goalNumber}</DailyListNumber>
                <DailyListNumber>{item.accumulateNumber}</DailyListNumber>
                <DailyListNumber>{item.dailyAddNumber}</DailyListNumber>
                <DailyListBtn
                  onClick={() => handleEditClick(item)}
                  className="p-2 m-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  수정
                </DailyListBtn>
              </DailyListTr>
            </DailyListWrap>
          </div>
        ));
      }
    }
  };
  // 이벤트 핸들러
  //선택편집(버튼활성화하기)
  const handleEditClick = item => {
    console.log("handleEdit_id", item.id);
    setDailyEdit(item);
  };

  // 일일수량 변경
  const handleDailyNumEditChange = e => {
    setDailyEditTodayNum(e.target.value);
  };

  // 일일수량 변경 취소
  const handleDailyCancelClick = () => {
    setDailyEdit(false);
  };

  // 일일수량 변경 저장하기
  const handleDailySaveClick = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.dailyAddNumber = dailyEditTodayNum;
      }
      return item;
    });
    setTodoData(newTodoData);

    // patchDailyAddNum(_id, dailyEditTodayNum);
    setDailyEdit(false);
    setDailyEditTodayNum("");
  };

  useEffect(() => {
    showNotTodoList();
  }, []);

  if (dailyEdit) {
    // 수정중인 상태
    return (
      <DailyListWrap>
        <DailyEditListTr>
          <DailyEditListTitle>{dailyEdit.title}</DailyEditListTitle>
          <DailyEditListNumber>{dailyEdit.goalNumber}</DailyEditListNumber>
          <DailyEditListNumber>누적숫자</DailyEditListNumber>
          <DailyEditListNumber>
            <input
              type="number"
              defaultValue={dailyEditTodayNum}
              onChange={handleDailyNumEditChange}
            />
          </DailyEditListNumber>
          <DailyEditListBtn>
            <button
              onClick={() => {
                handleDailySaveClick(dailyEdit.id);
              }}
              className="w-12 p-2 my-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              저장
            </button>
            <button
              onClick={handleDailyCancelClick}
              className="w-12 p-2 my-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              취소
            </button>
          </DailyEditListBtn>
        </DailyEditListTr>
      </DailyListWrap>
    );
  } else {
    return <div>{showNotTodoList()}</div>;
  }
};
export default DailyList;

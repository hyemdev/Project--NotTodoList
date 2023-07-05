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
import { getTodaylist } from "../api/api";
// import { patchDailyAddNum } from "../api/api";

const DailyList = ({ todoData, setTodoData }) => {
  // 데일리낫투두 수정 관련 state
  const [dailyEdit, setDailyEdit] = useState(false);
  const [dailyEditTodayNum, setDailyEditTodayNum] = useState(0);

  // get관련 useState
  const [todayList, setTodayList] = useState([]);

  // 오늘날짜 계산하기
  const todayDate = moment().format("YYYY-MM-DD");
  
  // Daily not todo list 출력
  const showNotTodoList = () => {
    if (todayList) {
      // 오늘날짜 list 출력하기
      return todayList.map(item => (
        // <div key={item.useListId}>
          <DailyListWrap key={item.useListId}>
            <DailyListTr>
              <DailyListTitle>{item.name}</DailyListTitle>
              {/* 목표수량 */}
              <DailyListNumber>{item.goalNumber}</DailyListNumber>
              {/* 누적수량 */}
              <DailyListNumber>{item.cost}</DailyListNumber>
              {/* 오늘수량 */}
              <DailyListNumber>{item.cost}</DailyListNumber>
              <DailyListNumber>{item.costCategory}</DailyListNumber>
              <DailyListBtn
                onClick={() => handleEditClick(item)}
                className="p-2 m-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                수정
              </DailyListBtn>
            </DailyListTr>
          </DailyListWrap>
        // </div>
      ));
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
    let newTodoData = getTodaylist.map(item => {
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

  // GET 위치
  useEffect(() => {
    showNotTodoList();
    getTodaylist(setTodayList, todayDate);
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
    return <>{showNotTodoList()}</>;
  }
};
export default DailyList;

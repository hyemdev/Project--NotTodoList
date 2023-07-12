import React, { useEffect, useState } from "react";
import { deleteTodo, putMonthlyTodo } from "../api/api";
import {
  AddListBtnDiv,
  AddListTdDate,
  AddListTdNumber,
  AddListTdTitle,
  AddListTdUnit,
  AddListTr,
  AddListbtn,
  ListEditUnit,
  ListNumEdit,
  ListNumEditDiv,
} from "../style/MonthlyAddCSS";

const MonthlyListItem = ({ item, todoData, setTodoData }) => {
  //state
  const [isEdit, setIsEdit] = useState(false);
  const [editGoalNumber, setEditGoalNumber] = useState(item.goalCost);
  console.log("item.goalCost", item.goalCost)
  console.log("editGoalNumber", editGoalNumber)


  // 선택삭제
  const handleDeleteClick = _goalId => {
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = todoData.filter(item => item.goalId !== _goalId);
    setTodoData(newTodoData);
    deleteTodo(_goalId);
  };

  //선택편집(버튼활성화하기)
  const handleEditClick = _goalId => {
    setIsEdit(true);
  };

  const handleNumEditChange = e => {
    setEditGoalNumber(e.target.value);
  };

  //수정 취소하기
  const handleCancelClick = () => {
    setIsEdit(false);
  };

  //수정 저장하기
  const handleSaveClick = _goalId => {
    console.log("_goalId", _goalId);
    let newTodoData = todoData.map(item => {
      if (item.goalId === _goalId) {
        // item.notTodo = editTitle;
        // item.costCategory = editSelect;
        item.goalCost = editGoalNumber;
      }
      return item;
    });
    setTodoData(newTodoData);

    // putTitleTodo(_goalId, { ...item });
    putMonthlyTodo(_goalId, editGoalNumber, setTodoData);
    setIsEdit(false);
  };

  useEffect(() => {
    console.log("화면 리랜더링");
  }, [handleSaveClick, handleDeleteClick]);

  if (isEdit) {
    //수정중인 상태
    return (
      <div>
        <AddListTr>
          <AddListTdDate>{item.monthYear}</AddListTdDate>
          <AddListTdTitle>
            {/* <ListTitleEdit
                type="text"
                defaultValue={editTitle}
                onChange={handleStrEditChange}
              /> */}
            {item.notTodo}
          </AddListTdTitle>

          <ListNumEditDiv>
            <ListNumEdit
              // defaultValue={editGoalNumber}
              value={editGoalNumber}
              onChange={handleNumEditChange}
            />
          </ListNumEditDiv>
          <ListEditUnit>
            {/* <Select
                  defaultValue={editSelect}
                  onChange={handleSelectEditChange}
                  options={selectTimePrice}
                /> */}
            {item.costCategory}
          </ListEditUnit>
          <AddListBtnDiv>
            <AddListbtn
              // onClick={() => handleSaveClick(item._goalId)}
              onClick={() => handleSaveClick(item.goalId)}
              className="bg-amber-500 hover:bg-amber-400 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Save
            </AddListbtn>
          </AddListBtnDiv>
          <AddListBtnDiv>
            <AddListbtn
              onClick={handleCancelClick}
              className="bg-amber-500 hover:bg-amber-400 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Cancel
            </AddListbtn>
          </AddListBtnDiv>
        </AddListTr>
      </div>
    );
  } else {
    // 평소상태
    return (
      <AddListTr>
        <AddListTdDate>{item.monthYear}</AddListTdDate>
        <AddListTdTitle>{item.notTodo}</AddListTdTitle>
        <AddListTdNumber>{item.goalCost}</AddListTdNumber>
        <AddListTdUnit>{item.costCategory}</AddListTdUnit>
        {/* 편집/ 삭제 버튼 만들기 */}
        <AddListBtnDiv>
          <AddListbtn
            onClick={handleEditClick}
            className="bg-amber-400 hover:bg-amber-300 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {" "}
            edit
          </AddListbtn>
        </AddListBtnDiv>
        <AddListBtnDiv>
          <AddListbtn
            onClick={() => handleDeleteClick(item.goalId)}
            className="bg-amber-400 hover:bg-amber-300 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {" "}
            del
          </AddListbtn>
        </AddListBtnDiv>
      </AddListTr>
    );
  }
};

export default MonthlyListItem;

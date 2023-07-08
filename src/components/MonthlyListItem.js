import React, { useState } from "react";
import Select from "react-select";
import { deleteTodo, putTitleTodo } from "../api/api";
import {
  AddListBtnDiv,
  AddListTbody,
  AddListTdDate,
  AddListTdNumber,
  AddListTdTitle,
  AddListTdUnit,
  AddListTr,
  AddListbtn,
  ListEditUnit,
  ListNumEdit,
  ListNumEditDiv,
  ListSelectEdit,
  ListTitleEdit,
} from "../style/MonthlyAddCSS";

const MonthlyListItem = ({ item, todoData, setTodoData }) => {
  //state
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.notTodo);
  const [editGoalNumber, setEditGoalNumber] = useState(item.goalCost);
  const [editSelect, setEditSelect] = useState(item.costCategory);

  // 선택창 옵션(추후에 따로 빼내야 함)
  const selectTimePrice = [
    { value: "time", label: "time" },
    { value: "price", label: "price" },
  ];

  // 이벤트핸들러

  // 선택삭제
  const handleDeleteClick = _goalId => {
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = todoData.filter(item => item.goalId !== _goalId);
    setTodoData(newTodoData);
    deleteTodo(_goalId);
  };

  //선택편집(버튼활성화하기)
  const handleEditClick = _goalId => {
    console.log("handleEdit_id", _goalId);
    setIsEdit(true);
  };

  //수정 입력창 생성하기
  // const handleStrEditChange = e => {
  //   setEditTitle(e.target.value);
  // };
  const handleNumEditChange = e => {
    setEditGoalNumber(e.target.value);
  };
  // const handleSelectEditChange = selectedOption => {
  //   setEditSelect(selectedOption.value);
  //   console.log("selectedOption", selectedOption);
  // };

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
    putTitleTodo(_goalId, editTitle, editSelect, editGoalNumber);
    console.log("newTodoData", newTodoData);
    console.log("_goalId", _goalId);
    console.log("editTitle", editTitle);
    setIsEdit(false);
  };

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
              type="number"
              defaultValue={editGoalNumber}
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
        <AddListTdDate>
          {/* {item.startDate}~{item.endDate} */}
          {item.monthYear}
        </AddListTdDate>
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

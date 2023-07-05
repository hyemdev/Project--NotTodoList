import React, { useState } from "react";
import Select from "react-select";
import { deleteTodo, putTitleTodo } from "../api/api";
import {
  AddListBtnDiv,
  AddListTbody,
  AddListTdDate,
  AddListTdNumber,
  AddListTdTitle,
  AddListTr,
  AddListbtn,
  ListNumEdit,
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
  const handleStrEditChange = e => {
    setEditTitle(e.target.value);
  };
  const handleNumEditChange = e => {
    setEditGoalNumber(e.target.value);
  };
  const handleSelectEditChange = selectedOption => {
    setEditSelect(selectedOption.value);
    console.log("selectedOption", selectedOption);
  };

  //수정 취소하기
  const handleCancelClick = () => {
    setIsEdit(false);
  };

  //수정 저장하기
  const handleSaveClick = _goalId => {
    let newTodoData = todoData.map(item => {
      if (item.goalId === _goalId) {
        item.goalId = _goalId
        item.notTodo = editTitle;
        item.costCategory = editSelect;
        item.goalCost = editGoalNumber;
      }
      return item;
    });
    setTodoData(newTodoData);

    putTitleTodo(_goalId, { ...item });
    console.log("putTitleTodo", {...item})
    setIsEdit(false);
  };

  if (isEdit) {
    //수정중인 상태
    return (
      <div>
        <AddListTbody>
          <AddListTr>
            <AddListTdDate className="w-10">{item.monthYear}</AddListTdDate>
            <AddListTdTitle>
              <ListTitleEdit
                type="text"
                defaultValue={editTitle}
                onChange={handleStrEditChange}
              />
            </AddListTdTitle>
            <AddListTdNumber>
              <ListSelectEdit>
              <Select
                defaultValue={editSelect}
                onChange={handleSelectEditChange}
                options={selectTimePrice}
              />
              </ListSelectEdit>
            </AddListTdNumber>
            <AddListTdNumber>
              <ListNumEdit
                type="number"
                defaultValue={editGoalNumber}
                onChange={handleNumEditChange}
              />
            </AddListTdNumber>
            <AddListBtnDiv>
              <AddListbtn
                onClick={() => handleSaveClick(item.id)}
                className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Save
              </AddListbtn>
            </AddListBtnDiv>
            <AddListBtnDiv>
              <AddListbtn
                onClick={handleCancelClick}
                className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Cancel
              </AddListbtn>
            </AddListBtnDiv>
          </AddListTr>
        </AddListTbody>
      </div>
    );
  } else {
    // 평소상태
    return (
      <AddListTbody>
        <AddListTr>
          {/* <input
            type="checkbox"
            defaultChecked={item.completed}
            value={item.completed}
            onChange={() => handleCompleteChange(item.id)}
          /> */}
          <AddListTdDate>
            {/* {item.startDate}~{item.endDate} */}
            {item.monthYear}
          </AddListTdDate>
          <AddListTdTitle>{item.notTodo}</AddListTdTitle>
          <AddListTdNumber>{item.costCategory}</AddListTdNumber>
          <AddListTdNumber>{item.goalCost}</AddListTdNumber>
          {/* 편집/ 삭제 버튼 만들기 */}
          <AddListBtnDiv>
            <AddListbtn
              onClick={handleEditClick}
              className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              {" "}
              edit
            </AddListbtn>
          </AddListBtnDiv>
          <AddListBtnDiv>
            <AddListbtn
              onClick={() => handleDeleteClick(item.goalId)}
              className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              {" "}
              del
            </AddListbtn>
          </AddListBtnDiv>
        </AddListTr>
      </AddListTbody>
    );
  }
};

export default MonthlyListItem;

import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { deleteTodo, patchTitleTodo } from "../api/api";

const MonthlyListItem = ({ item, todoData, setTodoData }) => {
  //state
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editGoalNumber, setEditGoalNumber] = useState(item.goalNumber);
  const [editSelect, setEditSelect] = useState(item.options);

  // 선택창 옵션(추후에 따로 빼내야 함)
  const selectTimePrice = [
    { value: "time", label: "time" },
    { value: "price", label: "price" },
  ];

  // 이벤트핸들러
  // complete변경
  const handleCompleteChange = _id => {
    console.log("_id", _id);

    // newTodoData에 배열(map)을 담아라. id가 동일하면 completed를 false로
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        // id값이 일치하다면 complete값을 반대로 돌리자
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };
  // 선택삭제
  const handleDeleteClick = _id => {
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = todoData.filter(item => item.id !== _id);
    setTodoData(newTodoData);
    deleteTodo(_id);
  };
  //선택편집(버튼활성화하기)
  const handleEditClick = _id => {
    console.log("handleEdit_id", _id);
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
  const handleSaveClick = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.title = editTitle;
        item.options = editSelect;
        item.goalNumber = editGoalNumber;
        item.completed = false;
      }
      return item;
    });
    setTodoData(newTodoData);

    patchTitleTodo(_id, { ...item });
    setIsEdit(false);
  };

  if (isEdit) {
    //수정중인 상태
    return (
      <div>
        <div>
          <input
            type="text"
            defaultValue={editTitle}
            onChange={handleStrEditChange}
          />
          <Select
            defaultValue={editSelect}
            onChange={handleSelectEditChange}
            options={selectTimePrice}
            className="w-24"
          />
          <input
            type="number"
            defaultValue={editGoalNumber}
            onChange={handleNumEditChange}
          />
          <button onClick={handleCancelClick}> cancel </button>
          <button onClick={() => handleSaveClick(item.id)}>save</button>
        </div>
      </div>
    );
  } else {
    // 평소상태
    return (
      <div>
        <div className="flex justify-around my-5 mx-5">
          <input
            type="checkbox"
            defaultChecked={item.completed}
            value={item.completed}
            onChange={() => handleCompleteChange(item.id)}
          />
          <p>
            {item.startDate}~{item.endDate}
          </p>
          <span className="rounded-lg mx-2 mt-3">{item.title}</span>
          <span className="rounded-lg mx-2 mt-3">{item.options}</span>
          <span className="rounded-lg mx-2 mt-3">{item.goalNumber}</span>
          {/* 편집/ 삭제 버튼 만들기 */}
          <button onClick={handleEditClick}> edit </button>
          <button onClick={() => handleDeleteClick(item.id)}>del</button>
        </div>
      </div>
    );
  }
};

export default MonthlyListItem;

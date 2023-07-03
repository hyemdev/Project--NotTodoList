import React, { useState } from "react";
import Select from "react-select";
import { deleteTodo, patchTitleTodo } from "../api/api";
import {
  AddListTr,
  AddTableButton,
  AddTableThDate,
  AddTableThNumber,
  AddTableThTitle,
} from "../style/MonthlyAddCSS";

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
  // const handleCompleteChange = _id => {
  //   console.log("_id", _id);

  //   // newTodoData에 배열(map)을 담아라. id가 동일하면 completed를 false로
  //   let newTodoData = todoData.map(item => {
  //     if (item.id === _id) {
  //       // id값이 일치하다면 complete값을 반대로 돌리자
  //       item.completed = !item.completed;
  //     }
  //     return item;
  //   });
  //   setTodoData(newTodoData);
  // };

  
  // 선택삭제
  const handleDeleteClick = _uid => {
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = todoData.filter(item => item.uid !== _uid);
    setTodoData(newTodoData);
    deleteTodo(_uid);
  };

  //선택편집(버튼활성화하기)
  const handleEditClick = _uid => {
    console.log("handleEdit_id", _uid);
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
  const handleSaveClick = _uid => {
    let newTodoData = todoData.map(item => {
      if (item.uid === _uid) {
        item.title = editTitle;
        item.options = editSelect;
        item.goalNumber = editGoalNumber;
        // item.completed = false;
      }
      return item;
    });
    setTodoData(newTodoData);

    patchTitleTodo(_uid, { ...item });
    setIsEdit(false);
  };

  if (isEdit) {
    //수정중인 상태
    return (
      <div>
        <AddListTr>
          <AddTableThDate className="w-10">
            {/* {item.startDate}~{item.endDate} */}

          </AddTableThDate>
          <AddTableThTitle>
            <input
              type="text"
              defaultValue={editTitle}
              onChange={handleStrEditChange}
            />
          </AddTableThTitle>
          <AddTableThNumber>
            <Select
              defaultValue={editSelect}
              onChange={handleSelectEditChange}
              options={selectTimePrice}
            />
          </AddTableThNumber>
          <AddTableThNumber>
            <input
              type="number"
              defaultValue={editGoalNumber}
              onChange={handleNumEditChange}
            />
          </AddTableThNumber>
          <AddTableButton
            onClick={() => handleSaveClick(item.id)}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            save
          </AddTableButton>
          <AddTableButton
            onClick={handleCancelClick}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            cancel
          </AddTableButton>
        </AddListTr>
      </div>
    );
  } else {
    // 평소상태
    return (
      <AddListTr>
        {/* <input
            type="checkbox"
            defaultChecked={item.completed}
            value={item.completed}
            onChange={() => handleCompleteChange(item.id)}
          /> */}
        <AddTableThDate>
          {/* {item.startDate}~{item.endDate} */}
          {item.monthYear}
        </AddTableThDate>
        <AddTableThTitle>{item.title}</AddTableThTitle>
        <AddTableThNumber>{item.options}</AddTableThNumber>
        <AddTableThNumber>
          {item.goalNumber}
        </AddTableThNumber>
        {/* 편집/ 삭제 버튼 만들기 */}
        <AddTableButton
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          {" "}
          edit
        </AddTableButton>
        <AddTableButton
          onClick={() => handleDeleteClick(item.id)}
          className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          {" "}
          del
        </AddTableButton>
      </AddListTr>
    );
  }
};

export default MonthlyListItem;

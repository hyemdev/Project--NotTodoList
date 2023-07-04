import { useState } from "react";
import { deleteTodo, patchTitleTodo } from "../api/api";
import {
  CalListButton,
  CalListTbody,
  CalListTdBtnDiv,
  CalListTdNumber,
  CalListTdTitle,
  CalListTr,
} from "../style/CalendarListCSS";
import Select from "rc-select";

const CalendarDayListItem = ({ item, todoData, setTodoData }) => {
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

  // 선택삭제
  const handleDeleteClick = _id => {
    console.log(_id);
    console.log(todoData);
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = todoData.filter(item => item.id !== _id);
    setTodoData(newTodoData);
    deleteTodo(_id);
  };

  //선택편집(버튼활성화하기)
  const handleEditClick = _id => {
    // console.log("handleEdit_id", _id);
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
      }
      return item;
    });
    setTodoData(newTodoData);

    patchTitleTodo(_id, { ...item });
    setIsEdit(false);
  };

  // const handleSaveClick = _id => {
  //   // if (todoData.length === 0) {
  //   //   return; // todoData 배열이 비어있으면 함수 실행을 중단.
  //   // }
  //   console.log("todoData", todoData)

  //   let editedItem = todoData.find(item => item.id === _id); // 수정된 아이템 찾기
  //   if (!editedItem) {
  //     return; // 수정된 아이템이 없으면 함수 실행을 중단.
  //   }
  //   editedItem.title = editTitle;
  //   editedItem.options = editSelect;
  //   editedItem.goalNumber = editGoalNumber;

  //   setTodoData([...todoData]); // todoData를 새로운 배열로 업데이트

  //   patchTitleTodo(_id, editedItem); // 수정된 아이템 전달
  //   setIsEdit(false);
  // };

  if (isEdit) {
    //수정중인 상태
    return (
      <CalListTbody>
        <CalListTr>
          <CalListTdTitle>
            <input
              type="text"
              defaultValue={editTitle}
              onChange={handleStrEditChange}
            />
          </CalListTdTitle>
          <CalListTdNumber>
            <Select
              defaultValue={editSelect}
              onChange={handleSelectEditChange}
              options={selectTimePrice}
            />
          </CalListTdNumber>
          {/* 일일수량 출력 (수정필요)*/}
          <CalListTdNumber>
            <input
              type="number"
              defaultValue={editGoalNumber}
              onChange={handleNumEditChange}
            />
          </CalListTdNumber>
          {/* <CalListTdBtnDiv> */}
          <CalListButton
            onClick={() => handleSaveClick(item.id)}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            save
          </CalListButton>
          <CalListButton
            onClick={handleCancelClick}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            cancel
          </CalListButton>
          {/* </CalListTdBtnDiv> */}
        </CalListTr>
      </CalListTbody>
    );
  } else {
    // 평소상태
    return (
      <CalListTbody>
        <CalListTr>
          <CalListTdTitle>{item.title}</CalListTdTitle>
          <CalListTdNumber>{item.options}</CalListTdNumber>

          {/* 일일수량 출력필요함 */}
          <CalListTdNumber>{item.goalNumber}</CalListTdNumber>
          {/* 편집/ 삭제 버튼 만들기 */}
          {/* <CalListTdBtnDiv> */}
          <CalListButton
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {" "}
            edit
          </CalListButton>
          <CalListButton
            onClick={() => handleDeleteClick(item.id)}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {" "}
            del
          </CalListButton>
          {/* </CalListTdBtnDiv> */}
        </CalListTr>
      </CalListTbody>
    );
  }
};
export default CalendarDayListItem;

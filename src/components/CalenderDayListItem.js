import { useState } from "react";
import { deleteTodo, putDailyAddNum } from "../api/api";
import {
  CalListButton,
  CalListTbody,
  CalListTdBtnDiv,
  CalListTdNumber,
  CalListTdTitle,
  CalListTr,
} from "../style/CalendarListCSS";
import Select from "rc-select";

const CalendarDayListItem = ({ item, DailyList, setDailyList }) => {
  //state
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.name);
  const [editCostNumber, setEditCostNumber] = useState(item.cost);
  const [editSelect, setEditSelect] = useState(item.costCategory);

  // 선택창 옵션(추후에 따로 빼내야 함)
  const selectTimePrice = [
    { value: "time", label: "time" },
    { value: "price", label: "price" },
  ];

  // 선택삭제
  const handleDeleteClick = _useListId => {
    // tododata중 id가 겹치지않는것만 담는다.
    const newTodoData = DailyList.filter(item => item.useListId !== _useListId);
    setDailyList(newTodoData);
    // deleteTodo(_id);
  };

  //선택편집(버튼활성화하기)
  const handleEditClick = _useListId => {
    // console.log("handleEdit_id", _id);
    setIsEdit(true);
  };

  //수정 입력창 생성하기
  const handleStrEditChange = e => {
    setEditTitle(e.target.value);
  };
  const handleNumEditChange = e => {
    setEditCostNumber(e.target.value);
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
  const handleSaveClick = _useListId => {
    let newTodoData = DailyList.map(item => {
      if (item.useListId === _useListId) {
        item.useListId = _useListId;
        // item.title = editTitle;
        // item.options = editSelect;
        item.cost = editCostNumber;
      }
      return item;
    });
    setDailyList(newTodoData);

    putDailyAddNum(_useListId, { ...item });
    setIsEdit(false);
  };

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
              defaultValue={editCostNumber}
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
          <CalListTdTitle>{item.name}</CalListTdTitle>
          <CalListTdNumber>{item.costCategory}</CalListTdNumber>

          {/* 일일수량 출력필요함 */}
          <CalListTdNumber>{item.cost}</CalListTdNumber>
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
            onClick={() => handleDeleteClick(item.useListId)}
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

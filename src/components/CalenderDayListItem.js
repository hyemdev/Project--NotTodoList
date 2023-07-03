import { useState } from "react";
import { deleteTodo, patchTitleTodo } from "../api/api";
import { CalendarListButton, CalendarListTr, CalendarTableThDate, CalendarTableThNumber, CalendarTableThTitle, DailyTableThDate } from "../style/CalendarListCSS";
import Select from "rc-select";

const CalendarDayListItem = ({ item, todoData, setTodoData }) => {
<>list</>
    // //state
    // const [isEdit, setIsEdit] = useState(false);
    // // const [editTitle, setEditTitle] = useState(item.title);
    // // const [editGoalNumber, setEditGoalNumber] = useState(item.goalNumber);
    // // const [editSelect, setEditSelect] = useState(item.options);
  
    // // 선택창 옵션(추후에 따로 빼내야 함)
    // const selectTimePrice = [
    //   { value: "time", label: "time" },
    //   { value: "price", label: "price" },
    // ];

    // // 선택삭제
    // const handleDeleteClick = _id => {
    //   // tododata중 id가 겹치지않는것만 담는다.
    //   const newTodoData = todoData.filter(item => item.id !== _id);
    //   setTodoData(newTodoData);
    //   deleteTodo(_id);
    // };
  
    // //선택편집(버튼활성화하기)
    // const handleEditClick = _id => {
    //   console.log("handleEdit_id", _id);
    //   setIsEdit(true);
    // };
  
    // //수정 입력창 생성하기
    // const handleStrEditChange = e => {
    //   setEditTitle(e.target.value);
    // };
    // const handleNumEditChange = e => {
    //   setEditGoalNumber(e.target.value);
    // };
    // const handleSelectEditChange = selectedOption => {
    //   setEditSelect(selectedOption.value);
    //   console.log("selectedOption", selectedOption);
    // };
  
    // //수정 취소하기
    // const handleCancelClick = () => {
    //   setIsEdit(false);
    // };
  
    // //수정 저장하기
    // const handleSaveClick = _id => {
    //   let newTodoData = todoData.map(item => {
    //     if (item.id === _id) {
    //       item.title = editTitle;
    //       item.options = editSelect;
    //       item.goalNumber = editGoalNumber;
    //       // item.completed = false;
    //     }
    //     return item;
    //   });
    //   setTodoData(newTodoData);
  
    //   patchTitleTodo(_id, { ...item });
    //   setIsEdit(false);
    // };
  
    // if (isEdit) {
    //   //수정중인 상태
    //   return (
    //     <div>
    //       <CalendarListTr>
    //         <CalendarTableThDate className="w-10">
    //           {item.startDate}~{item.endDate}
    //         </CalendarTableThDate>
    //         <CalendarTableThTitle>
    //           <input
    //             type="text"
    //             defaultValue={editTitle}
    //             onChange={handleStrEditChange}
    //           />
    //         </CalendarTableThTitle>
    //         <CalendarTableThNumber>
    //           <Select
    //             defaultValue={editSelect}
    //             onChange={handleSelectEditChange}
    //             options={selectTimePrice}
    //           />
    //         </CalendarTableThNumber>
    //         <CalendarTableThNumber>
    //           <input
    //             type="number"
    //             defaultValue={editGoalNumber}
    //             onChange={handleNumEditChange}
    //           />
    //         </CalendarTableThNumber>
    //         <CalendarListButton
    //           onClick={() => handleSaveClick(item.id)}
    //           className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    //         >
    //           save
    //         </CalendarListButton>
    //         <CalendarListButton
    //           onClick={handleCancelClick}
    //           className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    //         >
    //           cancel
    //         </CalendarListButton>
    //       </CalendarListTr>
    //     </div>
    //   );
    // } else {
    //   // 평소상태
    //   return (
    //     <CalendarListTr>
    //       {/* <input
    //           type="checkbox"
    //           defaultChecked={item.completed}
    //           value={item.completed}
    //           onChange={() => handleCompleteChange(item.id)}
    //         /> */}
    //       <CalendarTableThDate>
    //         {item.startDate}~{item.endDate}
    //       </CalendarTableThDate>
    //       <CalendarTableThTitle>{item.title}</CalendarTableThTitle>
    //       <CalendarTableThNumber>{item.options}</CalendarTableThNumber>
    //       <CalendarTableThNumber>
    //         {item.goalNumber}
    //       </CalendarTableThNumber>
    //       {/* 편집/ 삭제 버튼 만들기 */}
    //       <CalendarListButton
    //         onClick={handleEditClick}
    //         className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    //       >
    //         {" "}
    //         edit
    //       </CalendarListButton>
    //       <CalendarListButton
    //         onClick={() => handleDeleteClick(item.id)}
    //         className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    //       >
    //         {" "}
    //         del
    //       </CalendarListButton>
    //     </CalendarListTr>
    //   );
    // }
  };
export default CalendarDayListItem
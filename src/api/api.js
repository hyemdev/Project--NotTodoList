import axios from "axios";

//  axios
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000",
//   timeout: 1000,
//   headers: {
//     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     Accept: "*/*",
//   },
// });

// todo data get
export const getTodo = async setTodoData => {
  try {
    const res = await axios.get("/api/monthly-goal");
    const result = await res.data;
    console.log("result", result);

    setTodoData(result);
  } catch (error) {
    console.log(error);
  }
};

// calendar data get
export const getCalendarTodo = async (setMonthData, DefalutMonth) => {
  try {
    const res = await axios.get(`/api/calender?monthYear=${DefalutMonth}`);
    const result = await res.data;
    console.log("result", result);
    setMonthData(result);
  } catch (error) {
    console.log(error);
  }
};

// // Memo get
// const getMemo = async setOneMemo => {
//   try {
//     const res = await axiosInstance.get("/todos");
//     const result = res.data;
//     console.log("result", result);

//     setOneMemo(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//post
//todo data post
export const postTodo = async newTodo => {
  try {
    const res = await axios.post("/api/monthly-goal", newTodo);
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// // 메모 내용 post
// const postOneMemo = async newTodo => {
//   try {
//     const res = await axiosInstance.post("/todos", newTodo);
//     const data = res.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//put
//todo data 수정기능 (수정필요)
export const putTitleTodo = async (_goalCost, item) => {
  try {
    const res = await axios.put("/api/monthly-goal", {
      goalId: 0,
      notTodo: "string",
      costCategory: "string",
      goalCost: 0,
    });
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// //daily오늘수량 수정기능
// const patchDailyAddNum = async (_id, dailyEditTodayNum) => {
//   try {
//     const res = await axiosInstance.patch(`/todos/${_id}`, {
//       dailyAddNumber: dailyEditTodayNum,
//     });
//     const data = res.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// 메모 수정기능(덮어씌우기)
export const putOneMemo = async (OneMemo) => {
  try {
    const res = await axios.put(`/api/memo`,{
      memo: OneMemo
    });
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//todo date delete (수정필요)
export const deleteTodo = async _goalId => {
  try {
    const res = await axios.delete(`/api/monthly-goal?goalId=${_goalId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

// export {
//   axiosInstance,
//   getMemo,
//   putOneMemo,
//   postOneMemo,
//   postTodo,
//   deleteTodo,
//   patchDailyAddNum,
//   patchTitleTodo,
// };

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

//////////////GET
// todo Add data get
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
export const getCalendarTodo = async DefalutMonth => {
  try {
    const res = await axios.get(`/api/calender?monthYear=${DefalutMonth}`);
    const result = await res.data;
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
    return [
      {
        name: "라면",
        date: "2023-07-01",
      },
      {
        name: "술",
        date: "2023-07-01",
      },
      {
        name: "여가생활",
        date: "2023-07-04",
      },
    ];
  }
};

// Day 상세 List get
export const getCalendarDaylist = async (setDailyList, clickDate) => {
  try {
    const res = await axios.get(`/api/daily?date=${clickDate}`);
    const result = await res.data;
    console.log("result", result);
    setDailyList(result);
  } catch (error) {
    console.log(error);
  }
};


// 가장 많이 절약한 금액의 달 data 가져오기
export const getMostSavedMonth = async (_startMonth, _endMonth) => {
  try {
    const startMonth = _startMonth;
    const endMonth = _endMonth;
    const res = await axios.get(
      `/api/main?startMonth=${startMonth}&endMonth=${endMonth}`,
    );
    // 데이터가 조금 복잡하게 들어옴. 주의할 것
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
    return {
      maxMoneyMonth: "2023-07",
      maxSaveMoney: 326000,
      maxTimeMonth: "2023-07",
      maxSaveTime: 170,
      sumSaveMoney: 524000,
      sumSaveTime: 220,
    };
  }
};

  
// 오늘의 List get
export const getTodaylist = async (setTodayList, todayDate) => {
  try {
    const res = await axios.get(`/api/daily?date=${todayDate}`);
    const result = await res.data;
    console.log("result", result);
    setTodayList(result);
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

//////////////////////////////////POST
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

////////////////////////////////////PUT
//todo data 수정기능 (수정필요)
export const putTitleTodo = async (_goalCost, item) => {
  try {
    const res = await axios.put("/api/monthly-goal", {
      goalId: item.goalId,
      notTodo: item.notTodo,
      costCategory: item.costCategory,
      goalCost: item.goalCost,
    });
    const data = await res.data;
    console.log("수정", data);
  } catch (error) {
    console.log(error);
  }
};

// daily오늘수량 수정기능
export const putDailyAddNum = async (_useListId, item) => {
  try {
    const res = await axios.patch("/api/daily", {
      cost: item.cost,
    });
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 메모 수정기능(덮어씌우기)
export const putOneMemo = async OneMemo => {
  try {
    const res = await axios.put(
      `/api/memo`,
      {
        memo: OneMemo,
      },
      // {
      //   memo: "string",
      // },
    );
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

///////////////////////////////////////DELETE
//todo date delete
export const deleteTodo = async _goalId => {
  try {
    const res = await axios.delete(`/api/monthly-goal?goalId=${_goalId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

//daily오늘수량 delete (수정필요)
export const deleteDailyAddNum = async _useListId => {
  try {
    const res = await axios.delete(`/api/daily?useListId=${_useListId}`);
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

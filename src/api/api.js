import axios from "axios";

// login id
//GET
// export const getId = async (setNickname, nickId) => {
//   try {
//     const res = await axios.get(`/api/member?memberId=${nickId}`);
//     const result = await res.data;
//     console.log("result", result);
//     console.log("nickId", nickId);
//     setNickname(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
//post
//nickname post
// export const postNickname = async (setNickId, inputNickname) => {
//   try {
//     const res = await axios.post("/api/member", inputNickname);
//     const data = await res.data;
//     console.log(data);
//     setNickId(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//////////////GET
// todo Add data get
export const getTodo = async (setTodoData, nickId) => {
  try {
    const res = await axios.get(`/api/monthly-goal?memberId=1`);
    const result = await res.data;
    console.log("result", result);

    setTodoData(result);
  } catch (error) {
    console.log(error);
  }
};

// calendar data get
export const getCalendarTodo = async (DefalutMonth, nickId) => {
  try {
    const res = await axios.get(
      `/api/calender?monthYear=${DefalutMonth}&memberId=1`,
    );
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
    const res = await axios.get(`/api/daily?date=${clickDate}&memberId=1`);
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
// export const getTodaylist = async (setTodayList, todayDate, nickId) => {
//   try {
//     const res = await axios.get(`/api/daily?date=${todayDate}&memberId=1`);
//     const result = await res.data;
//     console.log("result", result);
//     setTodayList(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getTodaylist = async (setTodayList, todayDate, nickId) => {
  try {
    const res = await axios.get(`/api/today-not-todo?memberId=1`);
    const result = await res.data;
    console.log("result", result);
    setTodayList(result);
  } catch (error) {
    console.log(error);
  }
};

// // Memo get
export const getMemo = async setOneMemo => {
  try {
    const res = await axios.get("/api/memo?memberId=1");
    const result = await res.data;
    console.log("result", result);
    setOneMemo(result);
  } catch (error) {
    console.log(error);
  }
};

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

////////////////////////////////////PUT
//todo data 수정기능 (수정필요)
export const putTitleTodo = async (
  _goalId,
  editTitle,
  editSelect,
  editGoalNumber,
) => {
  try {
    const res = await axios.put("/api/monthly-goal", {
      goalId: _goalId,
      notTodo: editTitle,
      costCategory: editSelect,
      goalCost: editGoalNumber,
    });

    const data = await res.data;
    console.log("수정", data);
  } catch (error) {
    console.log(error);
  }
};

// 메인 dailySection 일일수량 수정기능
export const patchDailyAddNum = async (_goalId, dailyEditTodayNum) => {
  try {
    const res = await axios.patch("/api/today-not-todo", {
      goalId: _goalId,
      useCost: dailyEditTodayNum,
    });
    const result = await res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Calendar 상세DayList 수정기능
export const putCalListEdit = async (_useListId, _goalId, editCostNumber) => {
  try {
    const res = await axios.put("/api/daily", {
      useListId: _useListId,
      goalId: _goalId,
      useCost: editCostNumber,
    });
    const result = await res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 메모 수정기능(덮어씌우기)
export const patchOneMemo = async OneMemo => {
  try {
    const res = await axios.patch("/api/memo", {
      memo: OneMemo,
    });
    const data = await res.data;
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

//daily 오늘수량 delete (수정필요)
export const deleteDailyAddNum = async _useListId => {
  try {
    const res = await axios.delete(`/api/daily?useListId=${_useListId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

//Calendar 상세DayList Delete
export const deleteCalList = async _useListId => {
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

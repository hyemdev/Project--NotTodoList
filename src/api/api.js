import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//////////////GET
// todo Add data get
export const getTodo = async setTodoData => {
  try {
    const res = await axiosInstance.get(`/api/monthly-goal?memberId=1`);
    const result = await res.data;
    console.log("result", result);
    setTodoData(result);
    return result
  } catch (error) {
    console.log(error);
  }
};

// calendar data get
export const getCalendarTodo = async (DefalutMonth, nickId) => {
  try {
    const res = await axiosInstance.get(
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
    const res = await axiosInstance.get(`/api/daily?date=${clickDate}&memberId=1`);
    const result = await res.data;
    console.log("result", result);
    setDailyList(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTodaylist = async setTodayList => {
  try {
    const res = await axiosInstance.get(`/api/today-not-todo?memberId=1`);
    const result = await res.data;
    const arr = result.map(item => {
      item.useCostSum = parseInt(item.useCostSum.replace(/,/g, ""));
      return item;
    });
    // console.log("result", arr);
    setTodayList(arr);
    if (res.ok) {
      setTodayList(); // 요청이 성공한 후 GET 요청을 보냄
    }
  } catch (error) {
    console.log(error);
  }
};

// // Memo get
export const getMemo = async setOneMemo => {
  try {
    const res = await axiosInstance.get("/api/memo?memberId=1");
    const result = await res.data;
    console.log("result", result);
    setOneMemo(result);
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////POST

//todo data post
export const postTodo = async (newTodo, setTodoData) => {
  try {
    const res = await axiosInstance.post("/api/monthly-goal", newTodo);
    const data = await res.data;
    console.log(data);
    if (res.ok) {
      setTodoData(); // POST 요청이 성공한 후 GET 요청을 보냄
    }
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////PUT
//todo data 수정기능 (수정필요)
export const putMonthlyTodo = async (_goalId, editGoalNumber, setTodoData) => {
  try {
    const res = await axiosInstance.put("/api/monthly-goal", {
      goalId: _goalId,
      goalCost: editGoalNumber,
    });

    const data = await res.data;
    console.log("수정", data);
    if (res.ok) {
      setTodoData(); // put 요청이 성공한 후 GET 요청을 보냄
    }
  } catch (error) {
    console.log(error);
  }
};

// 메인 dailySection 일일수량 수정기능
export const patchDailyAddNum = async (
  _goalId,
  dailyEditTodayNum,
  setTodayList,
) => {
  try {
    const res = await axiosInstance.patch("/api/today-not-todo", {
      goalId: _goalId,
      useCost: dailyEditTodayNum,
    });
    const result = await res.data;
    console.log(result);
    // setTodayList(result)
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Calendar 상세DayList 수정기능
export const putCalListEdit = async (_useListId, _goalId, editCostNumber) => {
  try {
    const res = await axiosInstance.put("/api/daily", {
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
    const res = await axiosInstance.patch("/api/memo", {
      memberId: 1,
      memo: OneMemo,
    });
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

///////////////////////////////////////DELETE
//todo date delete
export const deleteTodo = async _goalId => {
  try {
    const res = await axiosInstance.delete(`/api/monthly-goal?goalId=${_goalId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log("del,Err", error);
  }
};

//daily 오늘수량 delete (수정필요)
export const deleteDailyAddNum = async _useListId => {
  try {
    const res = await axiosInstance.delete(`/api/daily?useListId=${_useListId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

//Calendar 상세DayList Delete
export const deleteCalList = async _useListId => {
  try {
    const res = await axiosInstance.delete(`/api/daily?useListId=${_useListId}`);
    const result = await res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

// briefSection Get
export const getBriefData = async (startMonth, endMonth) => {
  console.log("api-startMonth", startMonth);
  console.log("api-endMonth", endMonth);
  try {
    const res = await axiosInstance.get(
      `/api/save-data?memberId=1&startMonth=${startMonth}&endMonth=${endMonth}`,
    );
    const result = await res.data;
    console.log("result", result);
    // setTextData(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// statistics Section Get
export const getAnalysisData = async setAnalystic => {
  try {
    const res = await axiosInstance.get("/api/data?memberId=1");
    const result = await res.data;
    // const { weeklyMoney, weeklyTime, monthMoney, monthTime } = result;
    console.log("result", result);
    setAnalystic(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

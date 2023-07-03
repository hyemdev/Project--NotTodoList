import axios from "axios";

//  axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

// todo data get
const getTodo = async setTodoData => {
  try {
    const res = await axiosInstance.get("/todos");
    const result = res.data;

    const todosArr = result.map(item => {
      item.completed = JSON.parse(item.completed);
      item.id = JSON.parse(item.id);
    });
    console.log("todosArr", todosArr);
    setTodoData(todosArr);

    console.log("result", result);

    setTodoData(result);
  } catch (error) {
    console.log(error);
  }
};

// 가장 많이 아낀 금액, 시간
const fetchData = async () => {
  try {
    const res = await axios.get('')
    const dummyData = res.data;
  } catch (error) {
    console.error('Error fetching data:' ,error)
  }
}



  // todo ~부터 ~까지 총 절약한 금액
  let savingData = null;

export const fetchDummyData = async (startDate, endDate) => {
  try {
    const res = await axios.get("", {
      params: { startDate, endDate },
    })
    savingData = res.data;
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}





// export const getSavingAmount = () => {
//   return savingData ? savingData.totalSavingAmount : null;
// }
// export const getDateRange = () => {
//   return savingData ? savingData.dataRange : null;
// }



//post
//todo data post
const postTodo = async newTodo => {
  try {
    const res = await axiosInstance.post("/todos", newTodo);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 메모 내용 post
const postOneMemo = async newTodo => {
  try {
    const res = await axiosInstance.post("/todos", newTodo);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//patch
//todo data 수정기능
const patchTitleTodo = async (_id, item) => {
  try {
    const res = await axiosInstance.patch(`/todos/${_id}`, {
      title: item.title,
      options: item.options,
      number: item.goalNumber,
      completed: item.completed,
    });
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//daily추가수량 수정기능
const patchDailyAddNum = async (_id, item) => {
  try {
    const res = await axiosInstance.patch(`/todos/${_id}`, item);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// 메모 수정기능(덮어씌우기)
const putOneMemo = async (_id, OneMemo) => {
  try {
    const res = await axiosInstance.put(`/todos/${_id}`, {
      oneMemoDate: OneMemo,
    });
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//todo date delete
const deleteTodo = async _id => {
  try {
    const res = await axiosInstance.delete(`/todos/${_id}`);
    const result = res.data;
    console.log("del,result", result);
  } catch (error) {
    console.log(error);
  }
};

export {
  axiosInstance,
  putOneMemo,
  postOneMemo,
  getTodo,
  postTodo,
  deleteTodo,
  patchDailyAddNum,
  patchTitleTodo,
};

import axios from "axios";
//  axios test
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

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

export { axiosInstance, putOneMemo, postOneMemo };

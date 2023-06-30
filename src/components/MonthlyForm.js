import React, { useState } from "react";
import { postTodo } from "../api/api";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { Button, Input, InputNumber, Radio, Form, Modal } from "antd";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { format, parseISO } from "date-fns";

const MonthlyForm = ({ todoData, setTodoData }) => {
  // state 변수
  const [strValue, setStrValue] = useState("");
  const [goalNumValue, setGoalNumValue] = useState("");
  const [selectedOption, setSelectedOption] = useState([0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [dailyAddNumber, setDailyAddNumber] = useState(0);

  //모달관련 state
  const [modalMessage, setModalMessage] = useState(""); // 메세지
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달창
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 셀렉트 옵션
  const selectTimePrice = [
    { value: "time", label: "time" },
    { value: "price", label: "price" },
  ];

  // 만약 당월이라면 현재날짜부터 말일까지
  // 만약 다음달이라면 1일부터 말일까지(제대로 구현안됨. 수정필요)
  // const startDate = moment(new Date()).format("YYYY-MM-DD");
  const startDate = parseISO(moment(new Date()).format("YYYY-MM-DD"));
  const startDateFormat = format(startDate, "yyyy-MM-dd");

  console.log(startDate);
  console.log(startDateFormat);

  const endDate = parseISO(
    moment(
      new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0),
    ).format("YYYY-MM-DD"),
  );
  const EndDateFormat = format(endDate, "yyyy-MM-dd");
  console.log(endDate);
  console.log(EndDateFormat);

  // 시작날짜~끝날짜 배열로 담기
  const getDatesInRange = (startDateFormat, EndDateFormat) => {
    const dates = [];
    const currentDay = moment(startDateFormat);
    const lastDay = moment(EndDateFormat);

    while (currentDay <= lastDay) {
      dates.push(currentDay.format("YYYY-MM-DD"));
      currentDay.add(1, "day");
    }

    return dates;
  };

  const datesInRange = getDatesInRange(startDateFormat, EndDateFormat);
  // console.log(datesInRange);

  // 목표명
  const handleStrChange = e => {
    console.log("str", e.target.value);
    setStrValue(e.target.value);
  };

  // 목표수량
  const handleNumChange = e => {
    console.log("num", e.target.value);
    setGoalNumValue(e.target.value);
  };

  // 옵션 선택
  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  // ant form 전송
  const onFinish = values => {
    console.log("Success:", values);

    const newTodo = {
      id: Date.now(),
      title: strValue,
      options: selectedOption,
      goalNumber: goalNumValue,
      completed: false,
      startDate: startDateFormat,
      endDate: EndDateFormat,
      dateArray: datesInRange,
      dailyAddNumber: dailyAddNumber,
    };
    console.log("selectedOption.value", selectedOption.value);
    console.log("newTodo", newTodo);

    setTodoData([...todoData, newTodo]);

    //Post
    postTodo(newTodo);

    // 전송완료 된 다음 입력창을 초기화 하자(제대로 안됨, 수정필요)
    setStrValue("");
    setGoalNumValue("");

    if (!values.title) {
      showModal();
      setModalMessage("목표를 입력해야 합니다");
      return false;
    }
    if (!values.options) {
      showModal();
      setModalMessage("단위를 입력해야 합니다");
      return false;
    }
    if (!values.goalNumber) {
      showModal();
      setModalMessage("목표수량을 선택해야 합니다");
      return false;
    }
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  registerLocale("ko", ko);

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <Form
          name="goal input"
          style={{ maxWidth: 1000 }}
          // 초기값 설정하기. { label : "원하는 초기값" }
          initialValues={""}
          // 실제로 post하는 자리
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <label>월 선택:</label>
          <ReactDatePicker
            selected={selectedMonth}
            onChange={date => setSelectedMonth(date)}
            locale="ko"
            dateFormat="MM/yyyy"
            minDate={new Date()} // 오늘날짜 이전은 선택못하게
            showMonthYearPicker
            startDate={startDate}
            endDate={endDate}
          />
          <Form.Item
            label="한달 목표"
            name="title"
            value={strValue}
            onChange={handleStrChange}
            style={{
              width: "300px",
              display: "inline-block",
            }}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="목표 단위"
            name="options"
            options={selectTimePrice}
            onChange={handleSelectedOption}
            style={{ display: "inline-block" }}
          >
            <Radio.Group style={{ display: "inline-block" }} size="large">
              <Radio.Button value="TIME">TIME</Radio.Button>
              <Radio.Button value="PRICE">PRICE</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="목표수량"
            name="goalNumber"
            value={goalNumValue}
            onChange={handleNumChange}
            style={{
              width: "120px",
              display: "inline-block",
            }}
          >
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            // onSubmit={handleSummit}
            style={{ margin: "0 auto" }}
          >
            <Button style={{}} htmlType="submit" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* 경고모달 */}
        {/* 경고모달 */}
        <Modal
          // title="로그인 실패..."
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          footer={
            <Button key="back" onClick={handleOk}>
              Return
            </Button>
          }
        >
          <p>안내!</p>
          <p>{modalMessage}</p>
        </Modal>
      </div>
    </div>
  );
};

export default MonthlyForm;

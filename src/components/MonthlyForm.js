import React, { useEffect, useState } from "react";
import { getTodo, postTodo } from "../api/api";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "../style/CustomDatePicker.css";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { Button, Input, InputNumber, Radio, Form, Modal } from "antd";
import { format } from "date-fns";
import {
  AddFormTitle,
  AddFormWrap,
  FormLabel,
  OptionDiv,
  SaveBtn,
} from "../style/MonthlyAddCSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MonthlyForm = ({ todoData, setTodoData }) => {
  // state 변수
  const [strValue, setStrValue] = useState("");
  const [goalNumValue, setGoalNumValue] = useState("");
  const [selectedOption, setSelectedOption] = useState([0]);
  // const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // 셀렉트 옵션
  const selectTimePrice = [
    { value: "시간", label: "time" },
    { value: "돈", label: "price" },
  ];

  const selectedMonthYYYYMM = format(selectedMonth, "yyyy-MM");

  // 목표명
  const handleStrChange = e => {
    setStrValue(e.target.value);
  };

  // 목표수량
  const handleNumChange = e => {
    setGoalNumValue(e.target.value);
  };

  // 옵션 선택
  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
  };

  // form 초기화용
  const [form] = Form.useForm();

  // ant form 전송
  const onFinish = async values => {
    console.log("Success:", values);

    const newTodo = {
      // 임시로 memberId:1 로 고정
      memberId: 1,
      notTodo: strValue,
      costCategory: selectedOption,
      goalCost: goalNumValue,
      monthYear: selectedMonthYYYYMM,
    };
    // setTodoData([...todoData, newTodo]);
    setTodoData([newTodo, ...todoData]);

    //Post
    await postTodo(newTodo, setTodoData);
    await getTodo(setTodoData);
    console.log("todoData", todoData);
    // 전송완료 된 다음 입력창을 초기화 하자
    form.resetFields();
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  registerLocale("ko", ko);

  useEffect(() => {
    console.log("화면 리랜더링");
  }, [onFinish, todoData]);
  return (
    <div>
      <AddFormWrap>
        <Form
          name="goalInput"
          // 초기값 설정하기. { label : "원하는 초기값" }
          initialValues={""}
          // 실제로 post하는 자리
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
          form={form}
        >
          <div>
            <FormLabel>월 선택</FormLabel>
            <ReactDatePicker
              className="custom-datepicker"
              selected={selectedMonth}
              onChange={date => setSelectedMonth(date)}
              locale="ko"
              dateFormat="yyyy/MM"
              minDate={new Date()} // 오늘날짜 이전은 선택못하게
              showMonthYearPicker
            />
          </div>
          <AddFormTitle>
            <FormLabel>한달목표</FormLabel>
            <Form.Item
              // label="한달 목표"
              name="notTodo"
              rules={[
                {
                  required: true,
                  message: "항목을 입력하세요",
                },
                { max: 20, message: "항목을 20자이내로 입력하세요" },
                {
                  pattern: /^\S/,
                  message: "항목을 입력하세요",
                },
              ]}
            >
              <Input
                size="large"
                value={strValue}
                onChange={handleStrChange}
                style={{ width: "200px" }}
              />
            </Form.Item>
          </AddFormTitle>
          <OptionDiv>
            <FormLabel>단위</FormLabel>
            <Form.Item
              // label="목표 단위"
              name="costCategory"
              options={selectTimePrice}
              onChange={handleSelectedOption}
            >
              <Radio.Group style={{ display: "inline-block" }} size="large">
                <div>
                  <Radio.Button value="시간">TIME</Radio.Button>
                  <Radio.Button value="돈">PRICE</Radio.Button>
                </div>
              </Radio.Group>
            </Form.Item>
          </OptionDiv>
          <div>
            <FormLabel>목표수량</FormLabel>
            <Form.Item
              // label="목표수량"
              name="goalCost"햣 
              rules={[
                // {
                //   type: "number",
                //   message: "수량을 입력하세요",
                // },
                { max: 10, message: "수량을 10자이내로 입력하세요" },
                {
                  required: true,
                  message: "수량을 입력하세요",
                },
                {
                  pattern: /^\S/,
                  message: "수량을 입력하세요",
                },
              ]}
            >
              <Input
                size="large"
                value={goalNumValue}
                onChange={handleNumChange}
                style={{ width: "100px" }}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <SaveBtn>
                <Button
                  htmlType="submit"
                  size="large"
                  style={{ background: "#3b82f6", color: "#fff" }}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginRight: "5px" }}
                  />
                  Add
                </Button>
              </SaveBtn>
            </Form.Item>
          </div>
        </Form>
      </AddFormWrap>
    </div>
  );
};

export default MonthlyForm;

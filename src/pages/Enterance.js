import { Button, Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import anime from "animejs";

const Enterance = ({ nickName, setNickname, nickId, setNickId }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const path = process.env.PUBLIC_URL;
  const bgImg = "enter.jpg";

  // const [isLinkHovered, setIsLinkHovered] = useState(false);
  // const handleLinkMouseEnter = () => {
  //   setIsLinkHovered(true);
  // };

  // const handleLinkMouseLeave = () => {
  //   setIsLinkHovered(false);
  // };

  const items = ["N", "o", "t", "", "T", "o", "d", "o", "", "L", "i", "s", "t"];

  //닉네임 담기
  const handleNickChange = e => {
    console.log("e.target.value", e.target.value);
    setNickname(e.target.value);
  };

  const onFinish = values => {
    console.log("Success:", values);

    const inputNickname = {
      nickname: user,
    };

    setUser(inputNickname);
    console.log("user", user);

    //Post
    // postNickname(setNickId, inputNickname);

    // localStorage.setItem("userName", inputNickname.nickname);

    navigate("/main");
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-full relative bg-slate-800 flex items-center justify-center">
      <div className="text-center text-5xl font-bold text-slate-100">
        <p>Not Todo List</p>
        <p className="text-xs font-normal leading-4">고치고 싶은 나쁜 습관을 기록해보세요</p>

        <div className="w-80 h-40 bg-slate-300 rounded-md flex justify-center items-center">
          <Form
            name="enter"
            direction="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: 300,
            }}
          >
            <div>
              <Form.Item>
                <Input
                  name="nickname"
                  placeholder="닉네임을 입력하세요"
                  size="large"
                  defaultValue={user}
                  onChange={handleNickChange}
                  style={{ border: "1px solid #475569"}}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ background: "#fbbf24", marginLeft: "5px", color:" #475569" }}
                >
                  Enter
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Enterance;

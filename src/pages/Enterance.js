import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getId, postNickname } from "../api/api";

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

  useEffect(() => {
    // getId(nickName,setNickId)
  }, []);
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-full relative">
      <div
        style={{
          backgroundImage: `URL(${path}/${bgImg})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          opacity: "0.6",
        }}
      >
        <div className="absolute top-3/4 left-1/2">
          <div className="absolute bottom-1/2 left-1/2 w-80 h-40 bg-slate-200 rounded-md flex justify-center items-center">
            <Form
              name="enter"
              direction="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
                    style={{ border: "1px solid #ca8a04" }}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ background: "#facc15" }}
                  >
                    Enter
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        {/* <Link
        to="/main"
        className=" p-8 rounded-md fixed left-2/4 bottom-1/4 text-3xl -skew-x-12 -rotate-3 text-yellow-200 bg-black hover:text-black hover:bg-[#fbe23f] hover:border-solid border-2 border-black"
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        ENTER
      </Link> */}
      </div>
    </div>
  );
};

export default Enterance;

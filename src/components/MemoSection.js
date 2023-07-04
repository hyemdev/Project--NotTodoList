import React, { useEffect, useState } from "react";
import { getMemo, postOneMemo } from "../api/api";
import {
  MemoDiv,
  MemoForm,
  MemoSectionTitle,
  MemoSectionWrap,
} from "../style/MemoSectionCSS";

const MemoSection = () => {
  const [OneMemo, setOneMemo] = useState("");
  const [MemoIsEdit, setMemoIsEdit] = useState(false);

  //
  const handleMemoChange = e => {
    // console.log("memo", e.target.value);
    setOneMemo(e.target.value);
  };
  // 메모수정창 열기
  const handleMemoEditClick = _id => {
    // console.log("handleEdit_id", _id);
    setMemoIsEdit(true);
  };
  //메모 수정 취소하기
  const handleMemoCancelClick = () => {
    setMemoIsEdit(false);
  };
  // //메모 저장 PUT
  // const handleSummit = _id => {
  //   setOneMemo(OneMemo);

  //   // putOneMemo(_id, OneMemo);

  //   setMemoIsEdit(false);
  // };

  // POST
  const handleMemoSaveClick = e => {
    // 브라우저 갱신 막기
    e.preventDefault();
    // 빈공백 입력 막기
    const blankRE = /^\s*$/;
    if (blankRE.test(OneMemo)) {
      alert("내용을 입력하세요");
    }
    const newTodo = {
      id: Date.now(),
      oneMemoData: OneMemo,
    };
    console.log("newTodo", newTodo);

    setOneMemo(newTodo.oneMemoData);

    //Post 하자~~~
    // postOneMemo(newTodo);
    setMemoIsEdit(false);

    // 전송완료 된 다음 입력창을 초기화 하자
    // setOneMemo("");

    // 메모내용 get
    useEffect(() => {
      // getMemo(setOneMemo);
    }, []);
  };
  if (MemoIsEdit) {
    //수정중인 상태
    return (
      <div>
        <MemoSectionTitle>한줄메모</MemoSectionTitle>
        <MemoSectionWrap>
          <MemoForm>
            <input
              type="text"
              placeholder="메모를 입력하세요"
              value={OneMemo}
              onChange={handleMemoChange}
              className="w-20 rounded-lg flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:ring-2 focus:ring-purple-100 mx-1"
            />
            <input
              onClick={handleMemoSaveClick}
              className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              type="submit"
              value="확인"
            />
            <input
              onClick={handleMemoCancelClick}
              className="py-2 px-4 mx-1 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              type="submit"
              value="취소"
            />
          </MemoForm>
        </MemoSectionWrap>
      </div>
    );
  } else {
    // 평소상태
    return (
      <div>
        <MemoSectionTitle>한줄메모</MemoSectionTitle>
        <MemoSectionWrap>
          <MemoDiv>{OneMemo}</MemoDiv>
          {/* 입력버튼 만들기 */}
          <button
            onClick={handleMemoEditClick}
            className="py-2 px-4 mr-10 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            입력
          </button>
        </MemoSectionWrap>
      </div>
    );
  }
};

export default MemoSection;

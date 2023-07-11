import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ProfileSection = ({ nickName, setNickname }) => {
  console.log("nickName", nickName);
  const [user, setUser] = useState(nickName);

  const displayUser = user ? user : "User";

  useEffect(() => {
    setUser(nickName);
  }, [nickName]);
  return (
    <div>
      <p className="text-lg font-semibold leading-loose">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-2xl text-slate-700"
        />
        <span className="rounded-lg	bg-yellow-200 p-1 mx-2">{displayUser} </span> 님 반갑습니다!
      </p>
      <p className="text-md leading-loose	ml-4 mt-2">
        이 달의 <b>Not Todo List</b>를 설정하고 , 오늘의 기록을 해보세요
      </p>
      <p className="text-md leading-loose	ml-4">
        
      </p>
    </div>
  );
};

export default ProfileSection;

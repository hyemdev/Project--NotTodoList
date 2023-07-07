import React, { useEffect, useState } from "react";

const ProfileSection = ({ nickName, setNickname }) => {
  console.log("nickName", nickName);
  const [user, setUser] = useState(nickName);

  useEffect(() => {
    setUser(nickName);
  }, [nickName]);
  return (
    <div>
      <p> 
        {user}
      님 반갑습니다!</p>
      <p> 이 달의 Not Todo List를 설정해보세요 </p>
    </div>
  );
};

export default ProfileSection;

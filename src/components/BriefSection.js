import { Button, Modal, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";


const BriefSection = () => {
  const [mostSavedMonth, setMostSavedMonth] = useState("");
  const [mostSavedAmount, setMostSavedAmount] = useState(0);

  const [mostSavedMonth2, setMostSavedMonth2] = useState("");
  const [mostSavedTime, setMostSavedTime] = useState(0);

  const [savingData, setSavingData] = useState(null);

  useEffect(() => {
    fetchData();

    // 더미데이터
    const dummyData2 = {
      startDate: "2023-01-01",
      endDate: "2023-01-31",
      totalSavingAmount: 5000,
    };
  }, []);

  const fetchData = async () => {
    const dummyData = [{ month: "2022-01", item: "과자", saving: 50000 }];

    let maxSavedMonth = "";
    let maxSavedAmount = 0;

    let maxSavedMonth2 = "";
    let maxSavedTime = 0;

    for (const item of dummyData) {
      if (item.savings > maxSavedAmount) {
        maxSavedMonth = item.month;
        maxSavedAmount = item.savings;
      }
    }
    setMostSavedMonth(maxSavedMonth);
    setMostSavedAmount(maxSavedAmount);

    for (const item of dummyData) {
      if (item.time > maxSavedTime) {
        maxSavedMonth2 = item.month;
        maxSavedTime = item.time;
      }
    }
    setMostSavedMonth2(maxSavedMonth2);
    setMostSavedTime(maxSavedTime);
  };
  // if (!savingData) {
  //     return <div>Loading...</div>;
  //   }
  // const { startDate, endDate, totalSavingAmount } = savingData;


  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true)
  // }
  // const [gogo, setGogo] = useState("");
  // useEffect(() => {
  //   // axios 호출 예정
  //   setGogo("50000");
  // }, []);

  // const [day, setDay] = useState("")
  // useEffect(() => {
  //   setDay("23년6월")
  // })

  // const [time, setTime] = useState("")
  // useEffect(() => {
  //   setTime("21")
  // })

  // const handleClick = () => {
  //   setGogo("1000")
  // }

  return (
    <div className="h-auto bg-slate-50 rounded-md p-10">
      <h2>가장 많이 아낀 달 : {mostSavedMonth}</h2>
      <h2>가장 많이 아낀 금액 : {mostSavedAmount}</h2>

      <h2>가장 많이 아낀 달 : {mostSavedMonth2}</h2>
      <h2>가장 많이 아낀 시간 : {mostSavedTime}</h2>

      {/* <h2>절약 금액 요약</h2>
      <p>절약 기간 : {startDate} ~ {endDate}</p>
      <p>총 절약 금액 : {totalSavingAmount}</p>
       */}
      

      
      {/* <div className="text-center text-2xl">
        <p>
          <span>{day}</span>에 {gogo}원으로
        </p>
        <br />
        <p className="mb-6">가장 많이 절약했습니다.</p>

        <p>
          <span>{day}</span>에 {time}시간으로
        </p>
        <br />
        <p className="mb-20">가장 많이 절약했습니다.</p>

        <p>
          <span>{day}</span>부터<span>{}</span>까지
        </p>
        <br />
        <p>
          총 절약한 {}
          <Space wrap>
            <Button type="primary" danger>
                금액
            </Button>
            /
            <Button onClick={handleClick} type="primary" danger>
              시간
            </Button>
          </Space>
        </p>
        <p>
          <span>{gogo}</span>원
        </p>
      </div> */}
      {/* <div className="text-3xl">
        <form>
          <input type="text" className="w-12 h-7 text-xlindent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월</span>
          <input type="text" className="w-12 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">원으로</span><br />
          <p className="text-xl float-left">가장 많이 절약했습니다.</p><br/>
        </form>
        
        <form action="#">
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월</span>
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">시간으로</span><br />
          <p className="text-xl float-left ">가장 많이 절약했습니다.</p>
        </form>

        <form action="#" className="mt-8 "><br/>
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>

          </select>
          <span className="text-xl float-left">월부터 ~ &nbsp;</span>
          
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월까지</span><br/>
          <p className="text-xl float-left">총 절약한 비용</p><br/> <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
        </form>

        <form action="#"><br/>
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월부터 ~ &nbsp;</span>
          
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월까지</span><br/>
          <BestSummaryAmount/>
          <p className="text-xl float-left">총 절약한 금액</p><br />
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
        </form>
      </div> */}
    </div>
  );
};
export default BriefSection;

import { useEffect, useState } from "react";
import { getBriefData } from "../api/api";
import { DatePicker, Space } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import moment from "moment";

const BriefSection2 = () => {
  // state
  const [textData, setTextData] = useState([]);
  const [startMonth, setStartMonth] = useState();
  const [endMonth, setEndMonth] = useState();

  const [selectedRange, setSelectedRange] = useState([]);

  const { RangePicker } = DatePicker;

  //이벤트 핸들러
  const handleRangeChange = dates => {
    setSelectedRange(dates);
    console.log("dates", dates);
    if (dates.length > 0) {
      setStartMonth(moment(dates[0]).format("YYYY-MM"));
      setEndMonth(moment(dates[1]).format("YYYY-MM"));
    }
  };

  useEffect(() => {
    getBriefData(startMonth, endMonth, setTextData);
  }, [startMonth, endMonth]);

  console.log("textData", textData);
  console.log("textData.result", textData.result);


  return (
    <>
      <div>BriefSection2</div>
      <div>
        <div>
          {/* <p>{startMonth}~{endMonth}까지 통계를 알려드려요</p> */}
          <p>
            <Space direction="vertical" size={12}>
              <RangePicker
                picker="month"
                bordered={true}
                locale={koKR}
                value={selectedRange}
                onChange={handleRangeChange}
              />
            </Space>
            까지 통계를 알려드려요
          </p>
          <p>
            기간동안 총 절약하신 금액은 {textData.sumSaveMoney || "0"}입니다{" "}
          </p>
          <p>
            기간동안 총 절약하신 시간은은 {textData.sumSaveTime || "0"}입니다{" "}
          </p>
        </div>
            {/* <p>
              {textData.result.maxSaveMoney.monthYear||"0"}월에
              {textData.result.maxSaveMoney.maxSaveMoney||"0"}원을 아끼셨어요!
            </p>

            <p>
              {textData.result.maxSaveTime.monthYear||"0"}월에
              {textData.result.maxSaveTime.maxSaveTime||"0"}시간을 아끼셨어요!
            </p> */}
      </div>
    </>
  );
};
export default BriefSection2;

// import { useEffect, useState } from "react";
// import { getBriefData } from "../api/api";
// import { DatePicker, Space } from "antd";
// import koKR from "antd/lib/locale/ko_KR";
// import moment from "moment";

// const BriefSection2 = () => {
//   // state
//   const [textData, setTextData] = useState(null);
//   const [selectedRange, setSelectedRange] = useState([]);

//   const { RangePicker } = DatePicker;

//   // 이벤트 핸들러
//   const handleRangeChange = dates => {
//     setSelectedRange(dates);
//   };

//   useEffect(() => {
//     if (selectedRange.length > 0) {
//       const startMonth = moment(selectedRange[0]).format("YYYY-MM");
//       const endMonth = moment(selectedRange[1]).format("YYYY-MM");
//       getBriefData(startMonth, endMonth)
//         .then(data => {
//           setTextData(data);
//           console.log("textData", data);
//         })
//         .catch(error => {
//           console.error("Failed to get brief data:", error);
//         });
//     }
//   }, [selectedRange, textData]);

//   console.log("textData", textData);

//   return (
//     <>
//       <div>BriefSection2</div>
//       <div>
//         <div>
//           <p>
//             <Space direction="vertical" size={12}>
//               <RangePicker
//                 picker="month"
//                 bordered={true}
//                 locale={koKR}
//                 value={selectedRange}
//                 onChange={handleRangeChange}
//               />
//             </Space>
//             까지 통계를 알려드려요
//           </p>
//           <p>기간동안 총 절약하신 금액은 {textData.sumSaveMoney || "0"}입니다 </p>
//           <p>
//             기간동안 총 절약하신 시간은은 {textData.sumSaveTime || "0"}입니다</p>
//         </div>
//         <p>
//           {textData.maxSaveMoney && (
//             <>
//               {textData.maxSaveMoney.monthYear}월에{" "}
//               {textData.maxSaveMoney.maxSaveMoney}원을 아끼셨어요!
//             </>
//           )}
//         </p>
//         <p>
//           {textData.maxSaveTime && (
//             <>
//               {textData.maxSaveTime.monthYear}월에{" "}
//               {textData.maxSaveTime.maxSaveTime}시간을 아끼셨어요!
//             </>
//           )}
//         </p>
//       </div>
//     </>
//   );
// };

// export default BriefSection2;

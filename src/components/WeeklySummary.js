import { ResponsiveBar } from "@nivo/bar";
import React, { useState } from "react";

const WeeklySummary = () => {
  const [weekData, setWeekData] = useState([
    { week: "게임", time: 999 },
    { week: "담배", time: 0 },
    { week: "유튜브", time: 2000 },
    { week: "술", time: 2000 },
    { week: "여가생활", time: 7000 },
    { week: "커피", time: 0 },
  ])

  // 수정할 코드는 여기서 관리
  const updateData = () => {
    const nextWeekData = [
      { week: "게임", time: 500 },
      { week: "담배", time: 1000 },
      { week: "유튜브", time: 3000 },
      { week: "술", time: 400 },
      { week: "여가생활", time: 1000 },
      { week: "운동", time: 1000 },
    ];
  
    // 삭제할 항목은 여기서 관리
    const itemsToDelte = ["커피" , "게임"]
    const filteredData = weekData.filter((item) =>!itemsToDelte.includes(item.week)); 
  
    const updatedData = filteredData.map((item) => {
      const newItem = nextWeekData.find((nextItem) => nextItem.week === item.week);
      if (newItem) {
        return {
          week: item.week,
          time: item.time + newItem.time,
        };
      }
      return item;
    });
  
    nextWeekData.forEach((newItem) => {
      const existingItem = updatedData.find((item) => item.week === newItem.week);
      if (!existingItem) {
        updatedData.push(newItem);
      }
    });
    setWeekData(updatedData);
  };
  return (
    <div className="flex flex-col">
      <div>
        <h2>Weekly 시간<button className="float-right mr-32 bg-white" onClick={updateData}>데이터 업데이트</button></h2>
        
        <div style={{ height: "400px" }}>
          <ResponsiveBar
            data={weekData}
            keys={["time"]}
            indexBy="week"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.2}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "week",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
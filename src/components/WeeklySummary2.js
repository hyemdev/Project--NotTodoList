import { ResponsiveBar } from "@nivo/bar";
import React, { useState } from "react";

const WeeklySummary2 = () => {
  const [weekData, setWeekData] = useState([
    { week: "과자", cost: 0 },
    { week: "담배", cost: 0 },
    { week: "라면", cost: 2500 },
    { week: "술", cost: 2000 },
    { week: "여가생활", cost: 7000 },
    { week: "커피", cost: 0 },
  ]);

  const addNewItem = () => {
    const newItem = {
      week: prompt("항목을 입력하세요"),
      cost: parseInt(prompt("금액을 입력하세요")) || 0
    };

    if (newItem.week && newItem.cost >= 0) {
      setWeekData([...weekData, newItem]);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <h2>Weekly 금액</h2>
        <div style={{ height: 400 }}>
          <ResponsiveBar
            data={weekData}
            keys={["cost"]}
            indexBy="week"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.2}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "week",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPositimon: "middle",
              legendOffset: 32
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]]
            }}
            legends={[
              {
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
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        </div>
        <button onClick={addNewItem} className="absolute top-9 right-24  border p-1 hover:bg-black hover:text-white">항목 추가</button>
      </div>
    </div>
  );
};

export default WeeklySummary2;
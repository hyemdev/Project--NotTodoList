import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";

const WeeklySummary2 = () => {
  // 초기 상단 데이터
  const weekDataInit = [
    {
      week: "지난주",
      "밀가루": 100000,
      "밀가루Color": "hsl(56, 70%, 50%)",
      "금연": 100000,
      "금연Color": "hsl(15, 70%, 50%)",
      "과자": 20000,
      "과자Color": "hsl(102, 70%, 50%)",
      "욕설": 50000,
      "욕설Color": "hsl(319, 70%, 50%)",
      "라면": 300000,
      "라면Color": "hsl(39, 70%, 50%)",
      donut: 129,
      donutColor: "hsl(18, 70%, 50%)",
    },
    {
      week: "이번주",
      "밀가루": 114,
      "밀가루Color": "hsl(17, 70%, 50%)",
      "금연": 86,
      "금연Color": "hsl(21, 70%, 50%)",
      "과자": 101,
      "과자Color": "hsl(191, 70%, 50%)",
      "욕설": 68,
      "욕설Color": "hsl(102, 70%, 50%)",
      "라면": 65,
      "라면Color": "hsl(48, 70%, 50%)",
      donut: 186,
      donutColor: "hsl(90, 70%, 50%)",
    },
  ];
  const [weekData, setWeekData] = useState(weekDataInit);

  return (
    <div className="flex flex-col">
      <div>
        <h2>Weekly 금액</h2>
        <div style={{ height: 400 }}>
          <ResponsiveBar
            data={weekData}
            keys={["밀가루", "금연", "과자", "욕설", "라면", "donut"]}
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

export default WeeklySummary2;
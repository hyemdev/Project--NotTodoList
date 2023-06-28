import { ResponsiveBar } from "@nivo/bar";
import React, { useState } from "react";

const WeeklySummary = () => {
  // 초기 상단 데이터
  const weekDataInit = [
    {
      country: "AD",
      "hot dog": 23,
      "hot dogColor": "hsl(56, 70%, 50%)",
      burger: 131,
      burgerColor: "hsl(15, 70%, 50%)",
      sandwich: 127,
      sandwichColor: "hsl(102, 70%, 50%)",
      kebab: 46,
      kebabColor: "hsl(319, 70%, 50%)",
      fries: 35,
      friesColor: "hsl(39, 70%, 50%)",
      donut: 129,
      donutColor: "hsl(18, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 114,
      "hot dogColor": "hsl(17, 70%, 50%)",
      burger: 86,
      burgerColor: "hsl(21, 70%, 50%)",
      sandwich: 101,
      sandwichColor: "hsl(191, 70%, 50%)",
      kebab: 68,
      kebabColor: "hsl(102, 70%, 50%)",
      fries: 65,
      friesColor: "hsl(48, 70%, 50%)",
      donut: 186,
      donutColor: "hsl(90, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 45,
      "hot dogColor": "hsl(72, 70%, 50%)",
      burger: 6,
      burgerColor: "hsl(278, 70%, 50%)",
      sandwich: 57,
      sandwichColor: "hsl(19, 70%, 50%)",
      kebab: 125,
      kebabColor: "hsl(133, 70%, 50%)",
      fries: 134,
      friesColor: "hsl(359, 70%, 50%)",
      donut: 133,
      donutColor: "hsl(232, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 88,
      "hot dogColor": "hsl(325, 70%, 50%)",
      burger: 25,
      burgerColor: "hsl(55, 70%, 50%)",
      sandwich: 108,
      sandwichColor: "hsl(81, 70%, 50%)",
      kebab: 102,
      kebabColor: "hsl(313, 70%, 50%)",
      fries: 154,
      friesColor: "hsl(230, 70%, 50%)",
      donut: 134,
      donutColor: "hsl(210, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 66,
      "hot dogColor": "hsl(62, 70%, 50%)",
      burger: 60,
      burgerColor: "hsl(125, 70%, 50%)",
      sandwich: 25,
      sandwichColor: "hsl(249, 70%, 50%)",
      kebab: 171,
      kebabColor: "hsl(279, 70%, 50%)",
      fries: 34,
      friesColor: "hsl(273, 70%, 50%)",
      donut: 34,
      donutColor: "hsl(114, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 112,
      "hot dogColor": "hsl(329, 70%, 50%)",
      burger: 12,
      burgerColor: "hsl(227, 70%, 50%)",
      sandwich: 82,
      sandwichColor: "hsl(115, 70%, 50%)",
      kebab: 44,
      kebabColor: "hsl(69, 70%, 50%)",
      fries: 199,
      friesColor: "hsl(37, 70%, 50%)",
      donut: 121,
      donutColor: "hsl(17, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 199,
      "hot dogColor": "hsl(210, 70%, 50%)",
      burger: 127,
      burgerColor: "hsl(80, 70%, 50%)",
      sandwich: 62,
      sandwichColor: "hsl(168, 70%, 50%)",
      kebab: 167,
      kebabColor: "hsl(126, 70%, 50%)",
      fries: 78,
      friesColor: "hsl(204, 70%, 50%)",
      donut: 49,
      donutColor: "hsl(60, 70%, 50%)",
    },
  ];
  const [weekData, setWeekData] = useState(weekDataInit);
  return (
    <div className="flex flex-col">
      <div>
        <h2>Weekly 시간</h2>
        <div style={{ height: 400 }}>
          <ResponsiveBar
            data={weekData}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
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
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
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
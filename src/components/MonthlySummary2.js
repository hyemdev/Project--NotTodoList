import { ResponsiveLine } from "@nivo/line";
import React from "react";

const MonthlySummary2 = () => {
  const data = {
    monthTime: [
      {
        month: "2023-01",
        saveCost: "0",
      },
      {
        month: "2023-02",
        saveCost: "0",
      },
      {
        month: "2023-03",
        saveCost: "0",
      },
      {
        month: "2023-04",
        saveCost: "0",
      },
      {
        month: "2023-05",
        saveCost: "0",
      },
      {
        month: "2023-06",
        saveCost: "-450",
      },
      {
        month: "2023-07",
        saveCost: "100,660",
      },
      {
        month: "2023-08",
        saveCost: "60",
      },
      {
        month: "2023-09",
        saveCost: "0",
      },
      {
        month: "2023-10",
        saveCost: "0",
      },
      {
        month: "2023-11",
        saveCost: "0",
      },
      {
        month: "2023-12",
        saveCost: "0",
      },
    ],
  };

  const generateRandomData = () => {
    const randomData = data.monthTime.map((item) => ({
      month: item.month,
      saveCost: Math.floor(Math.random() * 100000).toLocaleString(),
    }));
    return randomData;
  };



  const chartData = [
    {
      id: "전년",
      data: data.monthTime.map((item) => ({
        x: item.month,
        y: parseInt(item.saveCost.replace(",", "")),
      })),
    },
    {
      id: "동년",
      data: generateRandomData().map((item) => ({
        x: item.month,
        y: parseInt(item.saveCost.replace(",", "")),
      })),
    },
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle"
        }}
        colors={{ scheme: "category10" }}
        lineWidth={2}
        pointSize={4}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default MonthlySummary2;
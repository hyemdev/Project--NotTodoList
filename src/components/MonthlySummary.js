import { ResponsiveLine } from "@nivo/line";
import React from "react";

const MonthlySummary = ({ analystic, setAnalystic }) => {
  console.log("analystic.monthMoney", analystic.monthMoney);

  const transformMonthMoney = [
    {
      id: "Monthcost",
      data: analystic.monthMoney.map(item => ({
        x: item.month,
        y: parseInt(item.saveCost.replace(/,/g, ""), 10),
      })),
    },
  ];

  console.log("transformMonthMoney", transformMonthMoney);

  return (
    <div style={{ width: "500px", height: "300px" }}>
      <h2>monthly Summary(cost)</h2>
      <ResponsiveLine
        data={transformMonthMoney}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "cost",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
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
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MonthlySummary;

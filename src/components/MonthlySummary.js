import {
  faClock,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResponsiveLine } from "@nivo/line";
import React from "react";

const MonthlySummary = ({ analystic, setAnalystic }) => {
  const transformMonthMoney = [
    {
      id: "Monthcost",
      data: analystic.monthMoney.map(item => ({
        x: item.month,
        y: parseInt(item.saveCost.replace(/,/g, ""), 10),
      })),
    },
  ];

  return (
    <div
     style={{ width: "550px", height: "300px" }}
    >
      <h2 className="text-md font-semibold">
        <FontAwesomeIcon icon={faHandHoldingDollar} /> 지난 한달간 아낀 비용
      </h2>
      <ResponsiveLine
        data={transformMonthMoney}
        margin={{ top: 50, right: 50, bottom: 30, left: 70 }}
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
          // legend: "month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          format: value => Math.round(value),
          tickPadding: 25,
          tickRotation: 20,
        }}
        enableGridX={false}
        colors={{ scheme: "set3" }}
        lineWidth={3}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enablePointLabel={true}
        pointLabelYOffset={-12}
        useMesh={true}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
};

export default MonthlySummary;

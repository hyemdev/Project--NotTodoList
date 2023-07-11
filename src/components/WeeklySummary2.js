import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResponsiveBar } from "@nivo/bar";
import React, { useState } from "react";

const WeeklySummary2 = ({ analystic, setAnalystic }) => {
  const transformWeekTime = analystic.weeklyTime.map(item => ({
    name: item.name,
    cost: parseInt(item.cost.replace(/,/g, ""), 10),
  }));

  return (
      <div 
      style={{ width: "600px", height: "400px" }}
      >
        <h2 className="text-md font-semibold"><FontAwesomeIcon icon={faClock} /> 1주일 간 아낀 시간</h2>
        <div
         style={{ height: 400 }}
         >
          <ResponsiveBar
            data={transformWeekTime}
            keys={["cost"]}
            indexBy="name"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.2}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
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
              // legend: "name",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // legend: "time",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            // legends={[
            //   {
            //     dataFrom: "keys",
            //     anchor: "bottom-right",
            //     direction: "column",
            //     justify: false,
            //     translateX: 120,
            //     translateY: 0,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemDirection: "left-to-right",
            //     itemOpacity: 0.85,
            //     symbolSize: 20,
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemOpacity: 1,
            //         },
            //       },
            //     ],
            //   },
            // ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        </div>
      </div>
  );
};

export default WeeklySummary2;

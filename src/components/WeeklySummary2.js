import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";


const WeeklySummary2 = () => {
  const [weekData, setWeekData] = useState([
    { week: "과자", cost: 0 },
    { week: "담배", cost: 0 },
    { week: "라면", cost: 2500 },
    { week: "술", cost: 2000 },
    { week: "여가생활", cost: 7000 },
    { week: "커피", cost: 0 },
  ])

  const updateData = () => {
    const nextWeekData = [
      { week: "과자", cost: 500 },
      { week: "담배", cost: 1000 },
      { week: "라면", cost: 3000 },
      { week: "술", cost: 400 },
      { week: "여가생활", cost: 1000 },
      { week: "커피", cost: 500 },
      { week: "사탕", cost: 3000 },
    ]

    const updatedData = weekData.map((item) => {
      const newItem = nextWeekData.find((nextItem) => nextItem.week === item.week)
      if (newItem) {
        return {
          week: item.week,
          cost: item.cost + newItem.cost
        }
      }
      return item
    })

    nextWeekData.forEach((newItem) => {
      const existingItem = updatedData.find((item) => item.week === item.week)
      if (!existingItem) {
        updatedData.push(newItem)
      }
    })
    setWeekData(updatedData)
  }


  return (
    <div className="flex flex-col">
      <div>
        <h2>Weekly 금액<button className="float-right mr-32 bg-white" onClick={updateData}>데이터 업데이트</button></h2>
        
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
      </div>
    </div>
  );
};

export default WeeklySummary2;
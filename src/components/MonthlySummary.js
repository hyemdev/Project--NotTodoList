import { ResponsiveLine } from "@nivo/line";
import React, { useState } from "react";

const MonthlySummary = () => {
  // 초기 상단 데이터
  const jsonData = [
    {
      "month": "2023-01",
      "saveCost": 0
    },
    {
      "month": "2023-02",
      "saveCost": 0
    },
    {
      "month": "2023-03",
      "saveCost": 0
    },
    {
      "month": "2023-04",
      "saveCost": 0
    },
    {
      "month": "2023-05",
      "saveCost": 0
    },
    {
      "month": "2023-06",
      "saveCost": 50
    },
    {
      "month": "2023-07",
      "saveCost": 170
    },
    {
      "month": "2023-08",
      "saveCost": 60
    },
    {
      "month": "2023-09",
      "saveCost": 0
    },
    {
      "month": "2023-10",
      "saveCost": 0
    },
    {
      "month": "2023-11",
      "saveCost": 0
    },
    {
      "month": "2023-12",
      "saveCost": 0
    },
  ]

  const monthDataInit = [
    {
      id: "savings",
      color: "hsl(336,70%,50%",
      data: jsonData.map((item) => ({
        x: item.month,
        y:item.saveCost,
      }))
    }
  ]
  
  const [monthData, setMonthData] = useState(monthDataInit);
  return (
    <div className="flex flex-col">
      <div>
        <h2>Monthly 시간 (전월/당월 비교)</h2>
        <div style={{ height: 400 }}>
          <ResponsiveLine
        data={monthData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </div>
      </div>

    </div>
  );
};

export default MonthlySummary;
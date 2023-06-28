import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import React, { useState } from "react";

const MonthlySummary2 = () => {
  // 초기 상단 데이터
  const monthDataInit = [
    {
      "id": "japan",
      "color": "hsl(336, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 212
        },
        {
          "x": "helicopter",
          "y": 174
        },
        {
          "x": "boat",
          "y": 76
        },
        {
          "x": "train",
          "y": 192
        },
        {
          "x": "subway",
          "y": 67
        },
        {
          "x": "bus",
          "y": 130
        },
        {
          "x": "car",
          "y": 76
        },
        {
          "x": "moto",
          "y": 132
        },
        {
          "x": "bicycle",
          "y": 253
        },
        {
          "x": "horse",
          "y": 243
        },
        {
          "x": "skateboard",
          "y": 177
        },
        {
          "x": "others",
          "y": 145
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(208, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 89
        },
        {
          "x": "helicopter",
          "y": 256
        },
        {
          "x": "boat",
          "y": 178
        },
        {
          "x": "train",
          "y": 101
        },
        {
          "x": "subway",
          "y": 206
        },
        {
          "x": "bus",
          "y": 113
        },
        {
          "x": "car",
          "y": 226
        },
        {
          "x": "moto",
          "y": 55
        },
        {
          "x": "bicycle",
          "y": 252
        },
        {
          "x": "horse",
          "y": 225
        },
        {
          "x": "skateboard",
          "y": 154
        },
        {
          "x": "others",
          "y": 104
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(148, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 122
        },
        {
          "x": "helicopter",
          "y": 15
        },
        {
          "x": "boat",
          "y": 201
        },
        {
          "x": "train",
          "y": 271
        },
        {
          "x": "subway",
          "y": 129
        },
        {
          "x": "bus",
          "y": 89
        },
        {
          "x": "car",
          "y": 241
        },
        {
          "x": "moto",
          "y": 195
        },
        {
          "x": "bicycle",
          "y": 209
        },
        {
          "x": "horse",
          "y": 171
        },
        {
          "x": "skateboard",
          "y": 188
        },
        {
          "x": "others",
          "y": 146
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(113, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 194
        },
        {
          "x": "helicopter",
          "y": 93
        },
        {
          "x": "boat",
          "y": 244
        },
        {
          "x": "train",
          "y": 109
        },
        {
          "x": "subway",
          "y": 279
        },
        {
          "x": "bus",
          "y": 282
        },
        {
          "x": "car",
          "y": 286
        },
        {
          "x": "moto",
          "y": 198
        },
        {
          "x": "bicycle",
          "y": 268
        },
        {
          "x": "horse",
          "y": 87
        },
        {
          "x": "skateboard",
          "y": 94
        },
        {
          "x": "others",
          "y": 27
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(231, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 124
        },
        {
          "x": "helicopter",
          "y": 83
        },
        {
          "x": "boat",
          "y": 244
        },
        {
          "x": "train",
          "y": 250
        },
        {
          "x": "subway",
          "y": 133
        },
        {
          "x": "bus",
          "y": 62
        },
        {
          "x": "car",
          "y": 178
        },
        {
          "x": "moto",
          "y": 235
        },
        {
          "x": "bicycle",
          "y": 14
        },
        {
          "x": "horse",
          "y": 95
        },
        {
          "x": "skateboard",
          "y": 76
        },
        {
          "x": "others",
          "y": 30
        }
      ]
    }
  ]
  const [monthData, setMonthData] = useState(monthDataInit);
  return (
    <div className="flex flex-col">
      <div>
        <h2>Monthly 금액 (전월/당월 비교)</h2>
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
            legend: 'count',
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

export default MonthlySummary2;
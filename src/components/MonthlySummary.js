import {  ResponsiveLine } from '@nivo/line'
import React from 'react'

const MonthlySummary = () => {
  const dataLine = [
    { behavior: "첫째주", tobacco: 1, drink: 1, drug: 3 },
    { behavior: "둘째주", tobacco: 2, drink: 2, drug: 4 },
    { behavior: "셋째주", tobacco: 3, drink: 3, drug: 5 },
  ];
  return (
    <>
    <div>MonthlySummary</div>
    <div className="p-6 mt-5 shadow rounded bg-white  w-2/5">
        <div style={{ height: "200px" ,width:"360px"}}>
          <ResponsiveLine
            data={dataLine}
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
      </>
  )
}

export default MonthlySummary
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

const WeeklySummary = () => {
  const dataBar = [
    { behavior: "첫째주", tobacco: 1, drink: 1, drug: 3 },
    { behavior: "둘째주", tobacco: 2, drink: 2, drug: 4 },
    { behavior: "셋째주", tobacco: 3, drink: 3, drug: 5 },
  ];
  return (
    <>
    <div>WeeklySummary</div>
    <div className="p-6 mt-5 shadow rounded bg-white  w-2/5">
        <div style={{ height: "200px" ,width:"360px"}}>
          <ResponsiveBar
            data={dataBar}
            // chart에서 보여질 데이터 key (측정되는 값)
            keys={["tobacco", "drink", "drug"]}
            // keys를 그룹화하는 index key (분류)
            indexBy="behavior"
            // 차트 간의 여백 (bar간의 여백)
            padding={0.3}
            // 차트의 색상
            colors={["olive", "brown", "orange"]}
            // 색상을 적용함
            colorBy="id"
            // 테마 설정
            theme={[
              {
                // label 스타일(bar에 표현되는 글씨)
                labels: {
                  text: {
                    fontSize: 14,
                    fill: "#000000",
                  },
                },
                // legend 스타일(우측하단에 있는 색상별 key 표시)
                legends: {
                  text: {
                    fontSize: 10,
                    fill: "#ff0000",
                  },
                },
                // axios legend 스타일(bottom, left 글씨)
                axios: {
                  legend: {
                    text: {
                      fontSize: 20,
                      fill: "#ffff00",
                    },
                  },
                  ticks: {
                    text: {
                      fontSize: 16,
                      fill: "#0000ff",
                    },
                  },
                },
              },
            ]}
            // axis Bottom 설정
            axisBottom={{
              tickSize: 5, // 값 설명하기 위해 보여지는 점 크기
              tickPadding: 5,
              tickRotation: 0, // 점의 기울기
            }}
            enableGridY={true}
            enableLabel={false}
          />
        </div>
      </div>
      </>
  )
}

export default WeeklySummary
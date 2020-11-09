import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const Graph = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 30, bottom: 30, left: 30 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0
    }}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    pointSize={0}
    useMesh
    legends={[]}
  />
)

export default Graph

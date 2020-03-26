import React from 'react';
import { scaleLinear } from 'd3';
import { useRef } from 'react';

const styles = {
  backgroundColor: 'lightblue',
}
const WithD3Drag = () => {
  const
    svgRef = useRef(),

    xScale = scaleLinear().domain([-5, 5]).range([0, 800]),
    yScale = scaleLinear().domain([-5, 5]).range([800, 0]),

    width = xScale.range()[1],
    height = yScale.range()[0]
    ;

  return (
    <svg style={styles} viewBox={`0 0 ${width} ${height}`} ref={svgRef}>
      <circle
        cx={200}
        cy={200}
        r={100}
        stroke="gray"
        fill="pink"
      />
    </svg>
  )
}

export default WithD3Drag;

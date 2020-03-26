import React from 'react'
import { scaleLinear } from '@vx/scale'
import { Drag } from '@vx/drag'

const styles = {
  backgroundColor: 'lightblue',
  // width: '80%',
  // height: 'auto'

}

const VXDragTest = () => {
  const
    xScale = scaleLinear({
      domain: [-5, 5],
      range: [0, 800]
    }),
    yScale = scaleLinear({
      domain: [-5, 5],
      range: [800, 0]
    }),
    width = xScale.range()[1],
    height = yScale.range()[0]
    ;
  return (
    <svg style={styles} viewBox={`0 0 ${width} ${height}`}>
      <Drag
        width={width}
        height={height}
      >
        {({
          dragStart,
          dragEnd,
          dragMove,
          isDragging,
          dx,
          dy
        }) => {
          return (
            <circle
              cx={200}
              cy={200}
              r={100}
              stroke="gray"
              fill="pink"
              transform={`translate(${dx}, ${dy})`}
              onMouseMove={dragMove}
              onMouseUp={dragEnd}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onTouchMove={dragMove}
              onTouchEnd={dragEnd}

            />
          )
        }}
      </Drag>
    </svg>
  )
}

export default VXDragTest

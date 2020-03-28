import { scaleLinear } from 'd3';
import { motion } from 'framer-motion';
import produce from 'immer';
import React, { useRef, useState } from 'react';

const OneDraggablePoint = () => {
  const
    svgRef = useRef(),

    xScale = scaleLinear().domain([-5, 5]).range([0, 800]),
    yScale = scaleLinear().domain([-5, 5]).range([800, 0]),

    width = xScale.range()[1],
    height = yScale.range()[0],

    [circle, setCircle] = useState({ cx: 300, cy: 200 }),

    [touchAction, setTouchAction] = useState('touch-auto'),
    setTouch = x => () => setTouchAction(x)
    ;



  return (
    <svg className="bg-blue-300 touch-none" viewBox={`0 0 ${width} ${height}`} ref={svgRef}>
      <motion.circle
        onPan={(e, info) => {
          setCircle(produce(draft => {
            let point = svgRef.current.createSVGPoint()
            point.x = info.point.x
            point.y = info.point.y
            point = point.matrixTransform(svgRef.current.getScreenCTM().inverse())
            draft.cx = point.x
            draft.cy = point.y
          }));
        }}
        cx={circle.cx}
        cy={circle.cy}
        r={100}
        stroke="gray"
        fill="pink"
      />
    </svg>
  )
}

export default OneDraggablePoint;

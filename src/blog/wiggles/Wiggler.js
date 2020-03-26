import { curveNatural } from '@vx/curve';
import { scaleLinear } from '@vx/scale';
import { Circle, LinePath } from '@vx/shape';
import produce from 'immer';
import React, { useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import MathPlane from '../../components/MathPlane';
import { animated, useSprings } from 'react-spring';

const Wiggler = () => {

  const
    svgRef = useRef(),

    xScale = scaleLinear({
      domain: [-5, 5],
      range: [0, 800]
    }),
    yScale = scaleLinear({
      domain: [-5, 5],
      range: [800, 0]
    }),

    [points, setPoints] = useState([
      [-4, 4],
      [-2, -4],
      [0, 4]
    ]),

    [springs, setSprings] = useSprings(points.length, i => ({
      x: 0,
      y: 0
    })),


    bind = useDrag(({ xy: [x, y], args: [i], down }) => {

      let point = svgRef.current.createSVGPoint()
      point.x = x
      point.y = y
      point = point.matrixTransform(svgRef.current.getScreenCTM().inverse())

      setSprings(index => ({
        x: i === index ? point.x - xScale(points[i][0]) - 30 : 0,
        y: i === index ? point.y - yScale(points[i][1]) - 20 : 0
      }))

      if (!down) {
        setPoints(produce(points, draft => {
          draft[i][0] += xScale.invert(point.x - 30);
          draft[i][1] += yScale.invert(point.x - 20);
        }))
        setSprings(index => ({
          x: 0,
          y: 0
        }))
      }
    });

  return (
    <MathPlane xScale={xScale} yScale={yScale} ref={svgRef}>
      <LinePath
        data={points}
        x={([x, _]) => xScale(x)}
        y={([_, y]) => yScale(y)}
        defined={([x, y]) => x <= 5 && x >= -5 && y <= 5 && y >= -5}
        curve={curveNatural}
        stroke="black"
        strokeWidth={1}
      />
      {springs.map((props, i) => (
        <animated.circle
          key={i}
          {...bind(i)}
          cx={xScale(points[i][0])}
          cy={yScale(points[i][1])}
          r={30}
          style={props}
        />
      ))}
    </MathPlane>
  );
}

export default Wiggler

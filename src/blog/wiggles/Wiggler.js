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


    bind = useDrag(({ movement: [x, y], args: [i] }) => {
      setSprings(index => ({
        x: i === index ? x : 0,
        y: i === index ? y : 0
      }))
      // let point = svgRef.current.createSVGPoint()
      // point.x = x
      // point.y = y
      // point = point.matrixTransform(svgRef.current.getScreenCTM().inverse())
      // setPoints(produce(draft => {
      //   // console.log(JSON.stringify(draft[i], null, 2))
      //   // console.log(point.x, point.y)
      //   draft[i] = [point.x, point.y]
      //   // draft[i][0] = point.x;
      //   // draft[i][1] = point.y;
      // }))
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
          r={10}
          style={props}
        />
      ))}
    </MathPlane>
  );
}

export default Wiggler

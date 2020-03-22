import React from 'react'
import { AxisLeft, AxisBottom } from '@vx/axis';
import { scaleLinear } from '@vx/scale';
import { Group } from '@vx/group'
import { Grid } from '@vx/grid';
import { LinePath } from '@vx/shape';
import { curveNatural } from '@vx/curve';
import * as R from 'ramda';
import * as d3 from 'd3';

export default ({
  width = 800,
  height = 800,
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  },
  x0 = -5,
  x1 = 5,
  y0 = -5,
  y1 = 5,
  f,
}) => {
  const
    xMax = width - margin.left - margin.right,
    yMax = height - margin.top - margin.bottom,

    xUnit = xMax / (x1 - x0),
    yUnit = yMax / (y1 - y0),

    xScale = scaleLinear({
      domain: [x0, x1],
      range: [0, xMax]
    }),

    yScale = scaleLinear({
      domain: [y0, y1],
      range: [yMax, 0]
    }),

    xTicks = R.range(x0, x1 + 1).filter(x => x !== 0),
    yTicks = R.range(y0, y1 + 1).filter(y => y !== 0),

    input = d3.range(x0, x1 + 1, 0.01);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            stroke="rgba(0,0,0,0.2)"
            width={xMax}
            height={yMax}
            rowTickValues={yTicks.slice(1, yTicks.length - 1)}
            columnTickValues={xTicks.slice(1, xTicks.length - 1)}
          />
          <AxisBottom top={yUnit * y1} scale={xScale} tickValues={xTicks} />
          <AxisLeft left={xUnit * Math.abs(x0)} scale={yScale} tickValues={yTicks} />
          {f &&
            <LinePath
              data={R.zip(input, input.map(f))}
              x={([x, _]) => xScale(x)}
              y={([_, y]) => yScale(y)}
              defined={([x, y]) => x <= x1 && x >= x0 && y <= y1 && y >= y0}
              curve={curveNatural}
              stroke="black"
              strokeWidth={1}
            />
          }
        </Group>
      </svg>
    </div>
  );
}

import { AxisBottom, AxisLeft } from '@vx/axis';
import { Grid } from '@vx/grid';
import { Group } from '@vx/group';
import { scaleLinear } from '@vx/scale';
import * as R from 'ramda';
import React from 'react';

const MathPlane = React.forwardRef(({
  xScale = scaleLinear({
    domain: [-5, 5],
    range: [0, 800]
  }),
  yScale = scaleLinear({
    domain: [-5, 5],
    range: [800, 0]
  }),
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  },
  children,
  ...restProps
}, ref) => {

  const
    [x0, x1] = xScale.domain(),
    [y0, y1] = yScale.domain(),

    width = xScale.range()[1] + margin.left + margin.right,
    height = yScale.range()[0] + margin.top + margin.bottom,

    xMax = width - margin.left - margin.right,
    yMax = height - margin.top - margin.bottom,

    xUnit = xMax / (x1 - x0),
    yUnit = yMax / (y1 - y0),

    xTicks = R.range(x0, x1 + 1).filter(x => x !== 0),
    yTicks = R.range(y0, y1 + 1).filter(y => y !== 0);

  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} {...restProps}>
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
        {children}
      </Group>
    </svg>
  );
})

export default MathPlane

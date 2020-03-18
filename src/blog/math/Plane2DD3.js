import React, { useRef, useEffect } from 'react'
import * as R from 'ramda'
import * as d3 from 'd3'

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
  const containerRef = useRef();

  useEffect(() => {
    const
      viewBox = [0, 0, width, height],

      xMax = width - margin.left - margin.right,
      yMax = height - margin.top - margin.bottom,

      xUnit = xMax / (x1 - x0),
      yUnit = yMax / (y1 - y0),

      scaleX = d3.scaleLinear().domain([x0, x1]).range([0, xMax]),
      scaleY = d3.scaleLinear().domain([y0, y1]).range([yMax, 0]),

      xTicks = d3.range(x0, x1 + 1, 1).filter(x => x !== 0),
      yTicks = d3.range(y0, y1 + 1, 1).filter(y => y !== 0),

      container = d3.select(containerRef.current);

    container.selectAll('*').remove();

    const
      svg =
        container.append("svg")
          .attr("viewBox", viewBox),

      chart =
        svg.append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`),

      xAxis =
        chart.append("g")
          .attr("transform", `translate(0, ${yUnit * y1})`)
          .call(d3.axisBottom(scaleX).tickValues(xTicks)),

      yAxis =
        chart.append("g")
          .attr("transform", `translate(${xUnit * Math.abs(x0)}, 0)`)
          .call(d3.axisLeft(scaleY).tickValues(yTicks)),

      xAxisGrid =
        chart.append("g")
          .selectAll(".xAxisGridLine")
          .data(xTicks.slice(1, -1)).enter().append("line")
          .attr("x1", d => scaleX(d))
          .attr("x2", d => scaleX(d))
          .attr("y1", scaleX(x0))
          .attr("y2", scaleX(x1))
          .attr("stroke", "rgba(0,0,0,0.2)"),

      yAxisGrid =
        chart.append("g")
          .selectAll(".yAxisGridLine")
          .data(yTicks.slice(1, -1)).enter().append("line")
          .attr("y1", d => scaleY(d))
          .attr("y2", d => scaleY(d))
          .attr("x1", scaleY(y0))
          .attr("x2", scaleY(y1))
          .attr("stroke", "rgba(0,0,0,0.2)"),

      line =
        d3.line()
          .defined(([x, y]) => x <= x1 && x >= x0 && y <= y1 && y >= y0)
          .x(([x, _]) => scaleX(x))
          .y(([_, y]) => scaleY(y)),

      input = d3.range(x0, x1 + 1, 0.01);

    if (f) {
      const pathData = line.curve(d3.curveNatural)(R.zip(input, input.map(f)));
      chart.append("path")
        .attr("d", pathData)
        .attr("stroke", "black")
        .attr("fill", "none");
    };
  });

  return (
    <div ref={containerRef} />
  );
}

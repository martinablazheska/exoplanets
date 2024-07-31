import {
  extent,
  scaleOrdinal,
  scaleSqrt,
  schemePaired,
  select,
  axisBottom,
  axisLeft,
  scaleLog,
  scaleSymlog,
} from 'd3';
import ExoplanetType from '../types/ExoplanetType';

const margin = {
  top: 50,
  right: 100,
  bottom: 50,
  left: 100,
};

const minRadius = 3;
const maxRadius = 15;

const drawChart = (
  svg: SVGSVGElement,
  exoplanets: ExoplanetType[],
  width: number,
  height: number,
): void => {
  const distanceExtent = extent(
    exoplanets,
    (exoplanet) => exoplanet.distance,
  ) as [number, number];

  const massExtent = extent(
    exoplanets,
    (exoplanet) => exoplanet.exoplanetEarthMass,
  ) as [number, number];

  const radiusExtent = extent(
    exoplanets,
    (exoplanet) => exoplanet.exoplanetEarthRadius,
  ) as [number, number];

  const discoveryMethods = [
    ...new Set(exoplanets.map((exoplanet) => exoplanet.discoveryMethod)),
  ];

  const xScale = scaleSymlog()
    .domain(distanceExtent)
    .range([margin.left, width - margin.right]);

  const yScale = scaleLog()
    .domain(massExtent)
    .range([height - margin.top, margin.bottom]);

  const radiusScale = scaleSqrt()
    .domain(radiusExtent)
    .range([minRadius, maxRadius]);

  const discoveryScale = scaleOrdinal()
    .domain(discoveryMethods)
    .range(schemePaired);

  //circles
  select(svg)
    .selectAll('circle')
    .data(exoplanets)
    .transition()
    .duration(500)
    .attr('opacity', 0.75)
    .attr('cx', (exoplanet) => xScale(exoplanet.distance))
    .attr('cy', (exoplanet) => yScale(exoplanet.exoplanetEarthMass))
    .attr('r', (exoplanet) => radiusScale(exoplanet.exoplanetEarthRadius))
    .style(
      'fill',
      (exoplanet) => discoveryScale(exoplanet.discoveryMethod) as string,
    );

  //axes
  select(svg)
    .append('g')
    .call(axisBottom(xScale).ticks(5))
    .attr(
      'transform',
      `translate(${-maxRadius}, ${height - margin.bottom + maxRadius})`,
    );
  // .call((g) => g.select('.domain').remove());

  select(svg)
    .append('g')
    .call(axisLeft(yScale).ticks(5))
    .attr('transform', `translate(${margin.left - maxRadius}, ${maxRadius})`);
  // .call((g) => g.select('.domain').remove());
};

export default drawChart;

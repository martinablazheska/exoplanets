import {
  extent,
  scaleOrdinal,
  scaleSqrt,
  schemeTableau10,
  select,
  axisBottom,
  axisLeft,
  scaleLog,
} from 'd3';
import ExoplanetType from '../types/ExoplanetType';

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

  const xScale = scaleSqrt().domain(distanceExtent).range([0, width]);
  const yScale = scaleLog().domain(massExtent).range([height, 0]);
  const radiusScale = scaleSqrt().domain(radiusExtent).range([3, 30]);
  const discoveryScale = scaleOrdinal()
    .domain(discoveryMethods)
    .range(schemeTableau10);

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
    .call(axisBottom(xScale).ticks(100))
    .attr('transform', `translate(0, ${height})`)
    .call((g) => g.select('.domain').remove());

  select(svg)
    .append('g')
    .call(axisLeft(yScale).ticks(10))
    .call((g) => g.select('.domain').remove());
};

export default drawChart;

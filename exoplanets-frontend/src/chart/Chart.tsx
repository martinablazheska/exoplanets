import { useEffect, useRef } from 'react';
import ExoplanetType from '../types/ExoplanetType';
import drawChart from './drawChart';

const Chart: React.FC<{
  exoplanets: ExoplanetType[];
  width: number;
  height: number;
}> = ({ exoplanets, width, height }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    chartRef.current && drawChart(chartRef.current, exoplanets, width, height);
  }, [drawChart, chartRef, exoplanets, width, height]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} ref={chartRef}>
      {exoplanets.map((exoplanet) => (
        <circle key={exoplanet.exoplanetName} />
      ))}
    </svg>
  );
};

export default Chart;

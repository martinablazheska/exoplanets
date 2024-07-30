import { useRef } from 'react';
import ExoplanetType from '../types/ExoplanetType';

const Chart: React.FC<{
  exoplanets: ExoplanetType[];
  width: number;
  height: number;
}> = ({ exoplanets, width, height }) => {
  const chartRef = useRef(null);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} ref={chartRef}>
      {exoplanets.map((exoplanet) => (
        <circle key={exoplanet.exoplanetName} r={2} />
      ))}
    </svg>
  );
};

export default Chart;

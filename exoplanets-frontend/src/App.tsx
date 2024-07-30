import { useEffect, useState } from 'react';
import { getExoplanets } from './services/ExoplanetsService';
import ExoplanetType from './types/ExoplanetType';
import Chart from './chart/Chart';
import filterExoplanets from './utils/filterExoplanets';

function App() {
  const [exoplanets, setExoplanets] = useState<ExoplanetType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchExoplanets = async () => {
      try {
        setIsLoading(true);
        const data = (await getExoplanets()) as ExoplanetType[];
        setExoplanets(filterExoplanets(data));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExoplanets();
  }, []);

  return (
    <div style={{ width: '100vw' }}>
      {exoplanets && !isLoading && (
        <Chart
          exoplanets={exoplanets}
          height={window.innerHeight}
          width={window.innerWidth}
        />
      )}
    </div>
  );
}

export default App;

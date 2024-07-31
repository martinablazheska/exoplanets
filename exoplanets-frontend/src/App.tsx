import { useEffect, useState } from 'react';
import { getExoplanets } from './services/ExoplanetsService';
import filterExoplanets from './utils/filterExoplanets';
import ExoplanetType from './types/ExoplanetType';
import Chart from './chart/Chart';

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
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      {exoplanets && !isLoading && (
        <Chart
          exoplanets={exoplanets}
          height={window.innerHeight - 100}
          width={window.innerWidth - 100}
        />
      )}
    </div>
  );
}

export default App;

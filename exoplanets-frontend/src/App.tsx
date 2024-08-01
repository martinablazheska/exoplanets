import { useEffect, useState } from 'react';
import { getExoplanets } from './services/ExoplanetsService';
import filterExoplanets from './utils/filterExoplanets';

import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

import ExoplanetType from './types/ExoplanetType';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';

function App() {
  const [exoplanets, setExoplanets] = useState<ExoplanetType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const chartHeight = theme.components?.header
    ? window.innerHeight - theme.components?.header?.height - 100
    : window.innerHeight - 100;

  const chartWidth = window.innerWidth - 100;

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack width="100%">
        <Header />
        {exoplanets && !isLoading && (
          <Chart
            exoplanets={exoplanets}
            height={chartHeight}
            width={chartWidth}
          />
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default App;

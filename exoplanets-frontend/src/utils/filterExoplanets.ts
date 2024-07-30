import ExoplanetType from '../types/ExoplanetType';

const filterExoplanets = (exoplanets: ExoplanetType[]): ExoplanetType[] => {
  return exoplanets.filter(
    (exoplanet) =>
      exoplanet.distance !== null &&
      exoplanet.exoplanetEarthMass !== null &&
      exoplanet.exoplanetEarthRadius !== null,
  );
};

export default filterExoplanets;

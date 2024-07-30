type ExoplanetType = {
  exoplanetName: string;
  hostStarName: string;
  hostStarAge: number | null;
  exoplanetOrbitalPeriod: number | null;
  exoplanetEarthRadius: number | null;
  exoplanetEarthMass: number | null;
  exoplanetDensity: number | null;
  distance: number | null;
};

export default ExoplanetType;

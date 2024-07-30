type ExoplanetType = {
  exoplanetName: string;
  hostStarName: string;
  hostStarAge: number | null;
  exoplanetOrbitalPeriod: number | null;
  exoplanetEarthRadius: number;
  exoplanetEarthMass: number;
  exoplanetDensity: number | null;
  distance: number;
  discoveryMethod: string;
};

export default ExoplanetType;

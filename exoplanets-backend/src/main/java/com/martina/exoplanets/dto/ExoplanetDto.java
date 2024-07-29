package com.martina.exoplanets.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ExoplanetDto {
    private String exoplanetName; // name of exoplanet
    private String hostStarName; // name of the host star
    private Double hostStarAge; // age of the host star
    private Double exoplanetOrbitalPeriod; // duration of a complete orbit around the host star or system (days)
    private Double exoplanetEarthRadius; // exoplanet radius measured in units of Earth's radius
    private Double exoplanetEarthMass; // exoplanet mass  measured in units of Earth's mass
    private Double exoplanetDensity; // exoplanet density measured in g/cm^3
    private Double distance; // distance to the planetary system measured in units of parasecs

}

package com.martina.exoplanets.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ExoplanetDto {
    private String exoplanetName;
    private String hostStarName;
    private Double exoplanetOrbitalPeriod;
    private Double exoplanetEarthRadius;
    private Double exoplanetEarthMass;
}

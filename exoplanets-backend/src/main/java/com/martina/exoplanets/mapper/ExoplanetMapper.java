package com.martina.exoplanets.mapper;

import com.martina.exoplanets.dto.ExoplanetDto;
import com.martina.exoplanets.model.Exoplanet;
import org.springframework.stereotype.Component;

@Component
public class ExoplanetMapper {

    public ExoplanetDto exoplanetMapper(Exoplanet exoplanet) {
        String exoplanetName = exoplanet.getPl_name();
        String hostStarName = exoplanet.getHostname();
        Double exoplanetOrbitalPeriod = exoplanet.getPl_orbper();
        Double exoplanetEarthRadius = exoplanet.getPl_rade();
        Double exoplanetEarthMass = exoplanet.getPl_bmasse();

        ExoplanetDto exoplanetDto = new ExoplanetDto(exoplanetName, hostStarName, exoplanetOrbitalPeriod,
                exoplanetEarthRadius, exoplanetEarthMass);

        return exoplanetDto;
    }
}

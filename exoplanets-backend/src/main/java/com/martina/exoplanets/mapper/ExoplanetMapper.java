package com.martina.exoplanets.mapper;

import com.martina.exoplanets.dto.ExoplanetDto;
import com.martina.exoplanets.model.Exoplanet;
import org.springframework.stereotype.Component;

@Component
public class ExoplanetMapper {

    public ExoplanetDto exoplanetMapper(Exoplanet exoplanet) {
        String exoplanetName = exoplanet.getPl_name();
        String hostStarName = exoplanet.getHostname();
        Double hostAge = exoplanet.getSt_age();
        Double exoplanetOrbitalPeriod = exoplanet.getPl_orbper();
        Double exoplanetEarthRadius = exoplanet.getPl_rade();
        Double exoplanetEarthMass = exoplanet.getPl_bmasse();
        Double exoplanetDensity = exoplanet.getPl_dens();
        Double distance = exoplanet.getSy_dist();
        String discoveryMethod = exoplanet.getDiscoverymethod();

        return new ExoplanetDto(exoplanetName, hostStarName, hostAge, exoplanetOrbitalPeriod,
                exoplanetEarthRadius, exoplanetEarthMass, exoplanetDensity, distance, discoveryMethod);
    }
}

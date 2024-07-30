package com.martina.exoplanets.service;

import com.martina.exoplanets.dto.ExoplanetDto;
import com.martina.exoplanets.mapper.ExoplanetMapper;
import com.martina.exoplanets.model.Exoplanet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class ExoplanetsService {

    private static final String NASA_EXOPLANETS_API_URL = "https://exoplanetarchive.ipac.caltech" +
            ".edu/TAP/sync?query=select+pl_name,hostname,st_age,pl_orbper,pl_rade,pl_bmasse," +
            "pl_dens,sy_dist,discoverymethod+from+pscomppars&format=json";

    private final WebClient webClient;
    private final ExoplanetMapper exoplanetMapper;

    @Autowired
    public ExoplanetsService(WebClient.Builder webClientBuilder, ExoplanetMapper exoplanetMapper) {
        this.exoplanetMapper = exoplanetMapper;
        this.webClient = webClientBuilder.baseUrl(NASA_EXOPLANETS_API_URL).build();
    }

    public List<ExoplanetDto> fetchExoplanets() {

        return this.webClient.get().retrieve().bodyToFlux(Exoplanet.class).map(exoplanetMapper::exoplanetMapper).collectList().block();
    }
}

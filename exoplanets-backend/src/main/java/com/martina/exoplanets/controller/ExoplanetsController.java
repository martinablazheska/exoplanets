package com.martina.exoplanets.controller;

import com.martina.exoplanets.dto.ExoplanetDto;
import com.martina.exoplanets.service.ExoplanetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExoplanetsController {

    @Autowired
    private ExoplanetsService exoplanetsService;

    @CrossOrigin(origins = "*")
    @GetMapping("/exoplanets")
    public List<ExoplanetDto> getExoplanets() {
        return exoplanetsService.fetchExoplanets();
    }
}

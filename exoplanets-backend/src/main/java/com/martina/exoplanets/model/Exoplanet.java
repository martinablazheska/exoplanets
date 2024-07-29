package com.martina.exoplanets.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Exoplanet {
    private String pl_name;
    private String hostname;
    private Double pl_orbper;
    private Double pl_rade;
    private Double pl_bmasse;
}

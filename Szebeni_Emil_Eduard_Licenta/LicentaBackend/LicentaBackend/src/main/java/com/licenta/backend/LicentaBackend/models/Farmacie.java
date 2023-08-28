package com.licenta.backend.LicentaBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "farmacie")
public class Farmacie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nume")
    private String nume;

    @Column(name = "oras")
    private String oras;

    @Column(name = "strada")
    private String strada;

    @Column(name = "numar")
    private Long numar;

    @Column(name = "interval_orar")
    private String intervalOrar;

    @OneToMany(mappedBy = "farmacie")
    @JsonIgnore
    private List<Farmacist> farmacistList;

}

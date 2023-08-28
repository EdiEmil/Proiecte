package com.licenta.backend.LicentaBackend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "sectie")
public class Sectie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "denumire")
    private String denumire;

    @Column(name = "spitalul_apartinator")
    private String spitalulApartinator;
}

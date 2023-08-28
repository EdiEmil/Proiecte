package com.licenta.backend.LicentaBackend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "spital")
public class Spital {

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
    private String numar;


}

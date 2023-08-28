package com.licenta.backend.LicentaBackend.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "raspuns")
public class Raspuns {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "mesaj")
    private String mesaj;

    @Column(name = "pret")
    private Double pret;

    @Column(name = "data")
    private java.sql.Date data;

    @Column(name = "interval_orar")
    private LocalTime intervalOrar;

    @Column(name = "farmacist_id")
    private Long farmacistId;

    @Column(name = "pacientCnp")
    private String pacientCnp;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @Column(name = "nume_farmacie")
    private String numeFarmacie;
}

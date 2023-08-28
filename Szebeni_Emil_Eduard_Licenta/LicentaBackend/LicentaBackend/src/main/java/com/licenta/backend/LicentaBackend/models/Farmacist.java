package com.licenta.backend.LicentaBackend.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "farmacist")
public class Farmacist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "fisrt_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "cnp")
    private String cnp;

    @ManyToOne
    @JoinColumn(name = "farmacie_id")
    private Farmacie farmacie;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @Column(name = "nume_farmacie")
    private String numeFarmacie;

    @Column(name = "oras_farmacie")
    private String orasFarmacie;

    @Column(name = "strada_farmacie")
    private String stradaFarmacie;

    @Column(name = "nr_farmacie")
    private Long nrFarmacie;

    @Column(name = "farmacie_curenta_id")
    private Long farmacieId;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "institutie")
    private String institutie;

    @Transient
    private String token;

    @Column(name = "approved") // campul in care verificam daca contul a fost acceptat de catre institutie
    private Boolean approved;

    public Boolean isApproved() {
        return approved;
    }
}

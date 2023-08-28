package com.licenta.backend.LicentaBackend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Data
@Entity
@Table(name = "programre")
public class Programare {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nume_pacient")
    private String numePacient;

    @Column(name = "prenume_pacient")
    private String prenumePacient;

    @Column(name = "cnp_pacient")
    private String cnpPacient;

    @Column(name = "nume_doctor")
    private String numeDoctor;

    @Column(name = "prenume_doctor")
    private String prenumeDoctor;

    @Column(name = "oras")
    private String oras;

    @Column(name = "spital")
    private String spital;

    @Column(name = "sectie")
    private String sectie;

    @Column(name = "interval_orar")
    private LocalTime intervalOrar;


    //@JsonIgnore
//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "trimitere_id")
//    private Trimitere trimitere;
//
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;

    @Column(name = "pacient_id")
    private Long pacientId;

    @Column(name = "trimitere_pacient_id")
    private Long trimiterePacientId;

    @Column(name = "data_programare")
    private java.sql.Date dataProgramare;
}

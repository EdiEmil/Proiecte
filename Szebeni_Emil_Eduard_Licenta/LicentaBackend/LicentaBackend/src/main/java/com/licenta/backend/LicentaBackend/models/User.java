package com.licenta.backend.LicentaBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 100)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @Column(name = "nume_doctor_familie")
    private String numeDoctorFamilie;

    @Column(name = "prenume_doctor_familie")
    private String prenumeDoctorFamilie;

    @Column(name = "cnp_doctor_familie")
    private String cnp_doctor_familie;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "doctor_spital", referencedColumnName = "last_name")
//    private DoctorSpital doctorSpital;

//    @OneToMany(mappedBy = "user")
//    @JsonIgnore
//    private List<Programare> programare;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Transient
    private String token;

}

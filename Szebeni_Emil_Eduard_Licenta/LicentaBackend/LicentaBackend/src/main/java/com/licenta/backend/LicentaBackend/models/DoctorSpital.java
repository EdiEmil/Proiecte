package com.licenta.backend.LicentaBackend.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "doctor_spital")
public class DoctorSpital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "institutie")
    private String institutie;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "poza_parafa")
    private String pozaParafa; //////////////// trebuie sters

//    @OneToMany(mappedBy = "doctorSpital")
//    private List<User> user;

    @Transient
    private String token;

    @Column(name = "approved") // campul in care verificam daca contul a fost acceptat de catre institutie
    private Boolean approved;

    public Boolean isApproved() {
        return approved;
    }

}

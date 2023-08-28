package com.licenta.backend.LicentaBackend.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name = "prescriere")
public class Prescriere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "serie")
    private String serie;

    @Column(name = "numar")
    private Long numar;

    @Column(name = "cui")
    private String cui;

    @Column(name = "cas")
    private String cas;

    ////////////////////////////////////////////////// Aprobat Comisie
    @Column(name = "aprobat")
    private Boolean aprobat;

    @Column(name = "aprobat_comise")
    private String aprobatComise;
    ////////////////////////////////////////////////////////////////

    @Column(name = "mf")
    private Boolean mf;

    @Column(name = "ambulatoriu")
    private Boolean ambulatoriu;

    @Column(name = "spital")
    private Boolean spital;

    @Column(name = "altele")
    private Boolean altele;

    @Column(name = "mf_mm")
    private Boolean mfMM;

    ///////////////////////////////////////////////// ASIGURAT

    @Column(name = "fo_rc")
    private String foRC;

    @Column(name = "nume")
    private String nume;

    @Column(name = "prenume")
    private String prenume;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "data_nasterii")
    //@JsonFormat(pattern = "yyyy-MM-dd")
    //@Temporal(TemporalType.DATE)
    private String dataNasterii;

    ////////////////////////////////////////SEXUL
    @Column(name = "m")
    private Boolean m;

    @Column(name = "f")
    private Boolean f;
    ////////////////////////////////////////////////

    @Column(name = "cetatenia")
    private String cetatenia;

    @Column(name = "salariat")
    private Boolean salariat;

    @Column(name = "coasigurat")
    private Boolean coasigurat;

    @Column(name = "liber_profesionist")
    private Boolean liberProfesionist;

    @Column(name = "copil")
    private Boolean copil;

    @Column(name = "elev_ucenic_student")
    private Boolean elevUcenicStudent;

    @Column(name = "gravida")
    private Boolean gravida;

    @Column(name = "pensionar")
    private Boolean pensionar;

    @Column(name = "alte_categorii")
    private Boolean alteCategorii;

    @Column(name = "veteran")
    private Boolean veteran;

    @Column(name = "revolutionar")
    private Boolean revolutionar;

    @Column(name = "hanicap")
    private Boolean handicap;

    @Column(name = "pns")
    private Boolean pns;

    @Column(name = "ajutor_social")
    private Boolean ajutorSocial;

    @Column(name = "somaj")
    private Boolean somaj;

    @Column(name = "personal_contractual")
    private Boolean personalContractual;

    @Column(name = "card_european")
    private Boolean cardEuropean;

    @Column(name = "acorduri_internationale")
    private Boolean acorduriInternationale;

    /////////////////////////////////////////////////////////////////////////////////////

    @Column(name = "diagnostic")
    private String diagnostic;

    ///////////////////////////////////////////////////////////////////////////////////////

    @Column(name = "data_prescriere")
//    @JsonFormat(pattern = "yyyy-MM-dd")
    private java.sql.Date dataPrescriere;

    @Column(name = "nr_zile_prescrise")
    private String nrZilePrescrise;

    //////////////////////////////////////// TABEL

    ///////////////1
    @Column(name = "cod_diagnostic1")
    private Long codDiagnostic1;

    @Column(name = "tip_diagnostic1")
    private String tipDiagnostic1;

    @Column(name = "denumire_comuna_internationala1")
    private String denumireComunaInternationala1;

    @Column(name = "ds1")
    private String ds1;

    @Column(name = "cantitate1")
    private String cantitate1;

    @Column(name = "pret_ref1")
    private Double pretRef1;

    @Column(name = "lista1")
    private String lista1;

    ///////////////2
    @Column(name = "cod_diagnostic2")
    private Long codDiagnostic2;

    @Column(name = "tip_diagnostic2")
    private String tipDiagnostic2;

    @Column(name = "denumire_comuna_internationala2")
    private String denumireComunaInternationala2;

    @Column(name = "ds2")
    private String ds2;

    @Column(name = "cantitate2")
    private String cantitate2;

    @Column(name = "pret_ref2")
    private Double pretRef2;

    @Column(name = "lista2")
    private String lista2;

    ///////////////3
    @Column(name = "cod_diagnostic3")
    private Long codDiagnostic3;

    @Column(name = "tip_diagnostic3")
    private String tipDiagnostic3;

    @Column(name = "denumire_comuna_internationala3")
    private String denumireComunaInternationala3;

    @Column(name = "ds3")
    private String ds3;

    @Column(name = "cantitate3")
    private String cantitate3;

    @Column(name = "pret_ref3")
    private Double pretRef3;

    @Column(name = "lista3")
    private String lista3;

    ///////////////4
    @Column(name = "cod_diagnostic4")
    private Long codDiagnostic4;

    @Column(name = "tip_diagnostic4")
    private String tipDiagnostic4;

    @Column(name = "denumire_comuna_internationala4")
    private String denumireComunaInternationala4;

    @Column(name = "ds4")
    private String ds4;

    @Column(name = "cantitate4")
    private String cantitate4;

    @Column(name = "pret_ref4")
    private Double pretRef4;

    @Column(name = "lista4")
    private String lista4;

    ///////////////5
    @Column(name = "cod_diagnostic5")
    private Long codDiagnostic5;

    @Column(name = "tip_diagnostic5")
    private String tipDiagnostic5;

    @Column(name = "denumire_comuna_internationala5")
    private String denumireComunaInternationala5;

    @Column(name = "ds5")
    private String ds5;

    @Column(name = "cantitate5")
    private String cantitate5;

    @Column(name = "pret_ref5")
    private Double pretRef5;

    @Column(name = "lista5")
    private String lista5;

    ///////////////6
    @Column(name = "cod_diagnostic6")
    private Long codDiagnostic6;

    @Column(name = "tip_diagnostic6")
    private String tipDiagnostic6;

    @Column(name = "denumire_comuna_internationala6")
    private String denumireComunaInternationala6;

    @Column(name = "ds6")
    private String ds6;

    @Column(name = "cantitate6")
    private String cantitate6;

    @Column(name = "pret_ref6")
    private Double pretRef6;

    @Column(name = "lista6")
    private String lista6;

    ///////////////7
    @Column(name = "cod_diagnostic7")
    private Long codDiagnostic7;

    @Column(name = "tip_diagnostic7")
    private String tipDiagnostic7;

    @Column(name = "denumire_comuna_internationala7")
    private String denumireComunaInternationala7;

    @Column(name = "ds7")
    private String ds7;

    @Column(name = "cantitate7")
    private String cantitate7;

    @Column(name = "pret_ref7")
    private Double pretRef7;

    @Column(name = "lista7")
    private String lista7;
    ////////////////////////////////////// sfarsit tabel

    @Column(name = "parafa_medic_prescriptor")
    private String parafaMedicPrescriptor;

    @Column(name = "farmacie_de_trimis")
    private String farmacieDeTrimis;

    @Column(name = "farmacie_id")
    private Long farmacieId;

}

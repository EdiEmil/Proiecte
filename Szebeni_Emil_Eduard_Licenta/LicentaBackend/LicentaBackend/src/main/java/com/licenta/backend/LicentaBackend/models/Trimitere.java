package com.licenta.backend.LicentaBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name = "trimitere")
public class Trimitere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "serie")
    private String serie;

    @Column(name = "numar")
    private Long numar;

    @Column(name = "catre_specialitatea_clinia")
    private String catreSpecialitateaClinica;

    @Column(name = "cui")
    private String cui;

    @Column(name = "sediu")
    private String sediu;

    @Column(name = "judetul")
    private String judetul;

    @Column(name = "casa_de_asigurari")
    private String casaDeAsigurari;

    @Column(name = "nr_contract")
    private Long nrContract;

    @Column(name = "mf")
    private Boolean mf;

    @Column(name = "amb_spec")
    private Boolean ambSpec;

    @Column(name = "unitate_sanitara_paturi")
    private Boolean unitateSanitaraPaturi;

    @Column(name = "altele")
    private Boolean altele;

    @Column(name = "urgenta")
    private Boolean urgenta;

    @Column(name = "curente")
    private Boolean curente;

    @Column(name = "asigurat_la_cas")
    private String asiguratLaCas;

    @Column(name = "nume")
    private String nume;

    @Column(name = "prenume")
    private String prenume;

    @Column(name = "adresa")
    private String adresa;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "cetatenia")
    private String cetatenia;

    //////////////////////////////////// Beneficiar
    @Column(name = "pachet_de_baza")
    private Boolean pachetDeBaza;

    @Column(name = "pachet_minimal")
    private Boolean pachetMinimal;
    ////////////////////////////////////////////////

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

    //////////////////////////////////////////////// 4
    @Column(name = "diagnostic_prezumtiv")
    private String diagnosticPrezumtiv;

    @Column(name = "cod_diagnostic_prezumtiv")
    private String codDiagnosticPrezumtiv;

    /////////////////////////////////////////////// Tip Diagnostic
    @Column(name = "p")
    private Boolean p;

    @Column(name = "a_s")
    private Boolean aS;

    @Column(name = "c")
    private Boolean c;

    @Column(name = "m")
    private Boolean m;
    //////////////////////////////////////////////////////////////////

    @Column(name = "alte_diagnostice_cunoscute")
    private String alteDiagnosticeCunoscute;

    @Column(name = "cod_diagnostic")
    private String codDiagnostic;

    @Column(name = "motivul_trimiterii_catre_alte_specialitati")
    private String motivulTrimiteriiCatreAlteSpecialitati;

    @Column(name = "investigatii_si_tratamente_efectuate")
    private String investigatiiSiTratamenteEfectuate;

    @Column(name = "nr_de_consultatii_acordate")
    private Long nrDeConsultatiiAcordate;

    @Column(name = "data_trimiterii")
    private java.sql.Date dataTrimiterii;

    @Column(name = "cod_parafa")
    private String codParafa;

    ///////////////////////////////// poza semnatura + parafa

    @Column(name = "se_interneaza_in_unitatea_sanitara_cu_paturi")
    private String seInterneazaInUnitateaSanitaraCuPatur;

    @Column(name = "sectia")
    private String sectia;

    @Column(name = "motivul_pt_care_nu_a_fost_necesara_internarea_la_domiciliu")
    private String motivulPtCareNuAFostNecesaraInternareaLaDomiciliu;

    @Column(name = "data_prezentarii")
    private java.sql.Date dataPrezentarii;

    //////////////////////////////////////// poza semnatura pacient

    @Column(name = "parafa_medic_servicii_medicale")
    private String parafaMedicServiciiMedicale;

    /////////////////////////////////////////////// field-uri pentru a specifica doctorul caruia ii trimitem

    @Column(name = "nume_doctor_de_triis")
    private String numeDoctorDeTrimis;

    @Column(name = "prenume_doctor_de_trimis")
    private String prenumeDoctorDeTrimis;

    @Column(name = "institutie_doctor_de_trimis")
    private String institutieDoctorDeTrimis;

//    @JsonIgnore
//    @OneToOne(mappedBy = "trimitere", fetch = FetchType.LAZY)
//    private Programare programare;

}

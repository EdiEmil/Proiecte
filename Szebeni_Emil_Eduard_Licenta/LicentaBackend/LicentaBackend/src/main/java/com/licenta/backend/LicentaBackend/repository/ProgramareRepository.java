package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Programare;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProgramareRepository extends JpaRepository<Programare, Long> {

    List<Programare> findByCnpPacient(String cnpPacient);
//    List<Programare> findByUserId(Long userId);
//    List<Programare> findByUser(Long userId);
//    List<Programare> findByNumeDoctorAndPrenumeDoctorAndSectie(String numeDoctor, String prenumeDoctor, String Sectie);
    List<Programare> findByPacientId(Long pacientId);
    Optional<Programare> findById(Long id);
    @Query("SELECT p FROM Programare p ORDER BY p.dataProgramare, p.intervalOrar")
    List<Programare> findByNumeDoctorAndPrenumeDoctorAndSectie(String numeDoctor, String prenumeDoctor, String sectie);
//    List<Trimitere> findByTrimiterePacientId(Long trimiterePacientId);

    List<Programare> findByNumeDoctorAndPrenumeDoctorAndSpital(String numeDoctor, String prenumeDoctor, String spital);

    List<Programare> findByDataProgramareBefore(java.sql.Date data);
}

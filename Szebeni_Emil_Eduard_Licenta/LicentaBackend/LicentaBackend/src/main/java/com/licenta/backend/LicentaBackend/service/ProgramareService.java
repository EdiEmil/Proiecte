package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Programare;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.List;
import java.util.Optional;

public interface ProgramareService {


    Programare saveProgramare(Long userId, Long trimitereId, Programare programare);

    List<Programare> getProgramareByPacientCnp(String cnp);


//    List<Programare> getProgramareByUser(Long userId);

//    List<Programare> getProgramareByNumeDoctorPrenumeDoctorSectie(String numeDoctor, String prenumeDoctor, String sectie);

    Optional<Programare> getProgramareById(Long id);

    List<Programare> getProgramareByPacientId(Long pacientId);

    List<Programare> getProgramareByDoctor(String numeDoctor, String prenumeDoctor, String sectie);

    List<Programare> getProgramareByDoctorNou(String numeDoctor, String prenumeDoctor, String spital);

    @Scheduled(cron = "0 0 0 * * ?")
    void stergereProgramariVechi();

//    List<Trimitere> getTrimitereByTrimiterePacientId(Long trimiterePacientId);
}

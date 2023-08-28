package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Programare;
import com.licenta.backend.LicentaBackend.repository.ProgramareRepository;
import com.licenta.backend.LicentaBackend.repository.TrimitereRepository;
import com.licenta.backend.LicentaBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramareServiceImpl implements ProgramareService{

    @Autowired
    private ProgramareRepository programareRepository;

    @Autowired
    private TrimitereRepository trimitereRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Programare saveProgramare(Long userId, Long trimitereId, Programare programare){
        programare.setPacientId(userId);
        programare.setTrimiterePacientId(trimitereId);
        return programareRepository.save(programare);
    }

    @Override
    public List<Programare> getProgramareByPacientCnp(String cnp){
        return programareRepository.findByCnpPacient(cnp);
    }

//    @Override
//    public List<Programare> getProgramareByUser(Long userId){
//        return programareRepository.findByUserId(userId);
//    }

//    @Override
//    public List<Programare> getProgramareByNumeDoctorPrenumeDoctorSectie(String numeDoctor, String prenumeDoctor, String sectie){
//        return programareRepository.findByNumeDoctorAndPrenumeDoctorAndSectie(numeDoctor, prenumeDoctor, sectie)
//               // ordoneaza programarile in ordinea crescatoare dupa inervalul orar
//                .stream()
//                .sorted(Comparator.comparing(Programare::getIntervalOrar))
//                .collect(Collectors.toList());
//    }

    @Override
    public Optional<Programare> getProgramareById(Long id){
        return programareRepository.findById(id);
    }

    @Override
    public List<Programare> getProgramareByPacientId(Long pacientId){
        return programareRepository.findByPacientId(pacientId);
    }

    @Override
    public List<Programare> getProgramareByDoctor(String numeDoctor, String prenumeDoctor, String sectie){
        return programareRepository.findByNumeDoctorAndPrenumeDoctorAndSectie(numeDoctor,prenumeDoctor, sectie);
    }

    @Override
    public List<Programare> getProgramareByDoctorNou(String numeDoctor, String prenumeDoctor, String spital){
        return programareRepository.findByNumeDoctorAndPrenumeDoctorAndSpital(numeDoctor, prenumeDoctor, spital);
    }

    @Override
    @Scheduled(cron = "0 0 0 * * ?")
    public void stergereProgramariVechi(){
        java.util.Date currentDate = new java.util.Date();
        java.sql.Date currentSqlDate = new java.sql.Date(currentDate.getTime());

        List<Programare> programariActualizate = programareRepository.findByDataProgramareBefore(currentSqlDate);
        for(Programare programare : programariActualizate){
            programareRepository.delete(programare);
        }


    }

//    @Override
//    public List<Trimitere> getTrimitereByTrimiterePacientId(Long trimiterePacientId){
//        return programareRepository.findByTrimiterePacientId(trimiterePacientId);
//    }
}

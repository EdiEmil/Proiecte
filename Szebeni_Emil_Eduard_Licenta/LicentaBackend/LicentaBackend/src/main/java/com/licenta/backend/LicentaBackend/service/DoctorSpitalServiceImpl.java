package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.repository.DoctorSpitalRepository;
import com.licenta.backend.LicentaBackend.repository.TrimitereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class DoctorSpitalServiceImpl implements DoctorSpitalService {

    @Autowired
    private DoctorSpitalRepository doctorSpitalRepository;

    @Autowired
    private TrimitereRepository trimitereRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public DoctorSpital saveDoctorSpital(DoctorSpital doctorSpital) {
        doctorSpital.setPassword(passwordEncoder.encode(doctorSpital.getPassword()));
        doctorSpital.setRole(Role.DOCTORSPITAL);
        doctorSpital.setCreateTime(LocalDateTime.now());
        doctorSpital.setApproved(false);

        return doctorSpitalRepository.save(doctorSpital);
    }

    @Override
    public Optional<DoctorSpital> findByUsername(String username) {

        return doctorSpitalRepository.findByUsername(username);
    }

    @Override
    public Optional<DoctorSpital> findByFirstName(String firstName) {

        return doctorSpitalRepository.findByFirstName(firstName);
    }

    @Override
    public boolean isUserApproved(Long userId){
        Optional<DoctorSpital> doctorSpital = doctorSpitalRepository.findById(userId);
        return doctorSpital.map(DoctorSpital::isApproved).orElse(false);
    }

    @Override
    public List<Trimitere> findYourTrimitere(String numeDoctorDeTrimis, String prenumeDoctorDeTrimis, String institutieDoctorDeTrimis){

        return trimitereRepository.findByNumeDoctorDeTrimisAndPrenumeDoctorDeTrimisAndInstitutieDoctorDeTrimis(numeDoctorDeTrimis,prenumeDoctorDeTrimis,institutieDoctorDeTrimis);
    }

    @Override
    public List<DoctorSpital> findAllDoctors(){

        return doctorSpitalRepository.findAll();
    }

    @Override
    public List<DoctorSpital> findDoctorSpitalById(Long id){

        return doctorSpitalRepository.findDoctorSpitalById(id);
    }

    @Override
    public void deleteDoctorById(Long doctorId){
        doctorSpitalRepository.deleteById(doctorId);
    }


}

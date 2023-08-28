package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface DoctorSpitalService {


    DoctorSpital saveDoctorSpital(DoctorSpital doctorSpital);

    Optional<DoctorSpital> findByUsername(String username);

    Optional<DoctorSpital> findByFirstName(String firstName);

    boolean isUserApproved(Long userId);

    List<Trimitere> findYourTrimitere(String numeDoctorDeTrimis, String prenumeDoctorDeTrimis, String institutieDoctorDeTrimis);


    List<DoctorSpital> findAllDoctors();

    List<DoctorSpital> findDoctorSpitalById(Long id);

    void deleteDoctorById(Long doctorId);
}

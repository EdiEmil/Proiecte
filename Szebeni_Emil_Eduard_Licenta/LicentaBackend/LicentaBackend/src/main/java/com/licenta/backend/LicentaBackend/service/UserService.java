package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.models.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User saveUser(User user);

    Optional<User> findByUsername(String username);

    Optional<Trimitere> updateDoctorDeTrimis(Trimitere trimitere1, String nume);

    List<User> findUserById(Long id);

    List<DoctorSpital> findDoctorByLastName(String doctorLastName);


    @Transactional
    void updateDoctorForUser(String numeDoctorForUser, String prenumeDoctorFamilie, Long userId);

//    List<User> findAllByNumeDoctorFamilie(String numeDoctorFamilie);

    List<User> findAllByNumeDoctorFamilie(String numeDoctorFamilie, String prenumeDoctorFamilie);

    void deleteUserById(Long userId);
}

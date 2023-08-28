package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
    List<User> findAll();
    List<User> findUserById(Long id);

    @Modifying
    @Query("update User u set u.numeDoctorFamilie = :numeDoctorFamilie, u.prenumeDoctorFamilie = :prenumeDoctorFamilie where u.id = :userId")
    void updateDoctorForUser(@Param("numeDoctorFamilie") String numeDoctorFamilie,@Param("prenumeDoctorFamilie") String prenumeDoctorFamilie ,@Param("userId") Long userId);

    List<User> findAllByNumeDoctorFamilieAndPrenumeDoctorFamilie(String numeDoctorFamilie, String prenumeDoctorfamilie);

//    @Transactional
//    @Modifying
//    @Query("update User u set u.doctorSpital = :doctorSpital where u.id = :userId")
//    void setDoctorForUser(@Param("pacientId") Long id, @Param("doctorSpital")DoctorSpital doctorSpital);


}

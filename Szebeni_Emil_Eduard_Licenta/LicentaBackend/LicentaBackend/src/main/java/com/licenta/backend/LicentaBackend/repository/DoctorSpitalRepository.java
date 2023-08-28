package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoctorSpitalRepository extends JpaRepository<DoctorSpital, Long> {

    Optional<DoctorSpital> findByFirstName(String firstName);
    Optional<DoctorSpital> findByUsername(String username);
    List<DoctorSpital> findDoctorSpitalById(Long id);

    List<DoctorSpital> findDoctorSpitalByLastName(String lastName);


}

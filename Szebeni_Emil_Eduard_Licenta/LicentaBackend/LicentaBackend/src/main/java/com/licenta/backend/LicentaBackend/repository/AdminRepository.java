package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,Long> {

    Optional<Admin> findByUsername(String username);

    @Modifying
    @Query("update DoctorSpital d set d.approved = true WHERE d.id = :doctorSpitalId")
    void approveDoctorSpital(@Param("doctorSpitalId") Long doctorSpitalId);

    @Modifying
    @Query("update Farmacist f set f.approved = true WHERE f.id = :farmacistId")
    void approvedFarmacist(@Param("farmacistId") Long farmacistId);

    @Modifying
    @Query("update DoctorSpital d set d.role = 'DOCTORFAM' where d.id = :doctorId")
    void changeDoctorRole(@Param("doctorId") Long doctorId);

    @Modifying
    @Query("update User d set d.role = 'ADMIN' where d.id = :adminId")
    void changeAdminRole(@Param("adminId") Long adminId);

    @Modifying
    @Query("select d from DoctorSpital d where d.approved = false")
    List<DoctorSpital> findAllUnapprovedDoctors();
    @Modifying
    @Query("select f from Farmacist f where f.approved = false")
    List<Farmacist> findAllUnapprovedFarmacisti();

}

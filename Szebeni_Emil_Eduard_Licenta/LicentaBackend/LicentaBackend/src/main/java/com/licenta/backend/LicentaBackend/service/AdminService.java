package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Role;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin saveAdmin(Admin admin);

    void approveDoctorSpital(Long doctorSpitalId);

    @Transactional
    void approveFarmacist(Long farmacistId);

    Optional<Admin> findByUsername(String username);


    @Transactional
    void changeDoctorRole(Long doctorId);

    @Transactional
    void changeAdminRole(Long adminId);

    List<Farmacist> findAllUnapprovedFarmacisti();

    List<DoctorSpital> findAllUnapprovedDoctors();
}

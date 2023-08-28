package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.repository.AdminRepository;
import com.licenta.backend.LicentaBackend.repository.FarmacieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private FarmacieRepository farmacieRepository;


    @Override
    public Admin saveAdmin(Admin admin){
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Role.ADMIN);

        return adminRepository.save(admin);
    }


    @Override
    @Transactional
    public void approveDoctorSpital(Long doctorSpitalId){
        adminRepository.approveDoctorSpital(doctorSpitalId);
    }

    @Override
    @Transactional
    public void approveFarmacist(Long farmacistId){
        adminRepository.approvedFarmacist(farmacistId);
    }

    @Override
    public Optional<Admin> findByUsername(String username){
        return adminRepository.findByUsername(username);
    }

    @Override
    @Transactional
    public void changeDoctorRole(Long doctorId){
        adminRepository.changeDoctorRole(doctorId);
    }

    @Override
    @Transactional
    public void changeAdminRole(Long adminId){
        adminRepository.changeAdminRole(adminId);
    }

    @Override
    public List<Farmacist> findAllUnapprovedFarmacisti() {
        return adminRepository.findAllUnapprovedFarmacisti();
    }

    @Override
    public List<DoctorSpital> findAllUnapprovedDoctors() {
        return adminRepository.findAllUnapprovedDoctors();
    }
}

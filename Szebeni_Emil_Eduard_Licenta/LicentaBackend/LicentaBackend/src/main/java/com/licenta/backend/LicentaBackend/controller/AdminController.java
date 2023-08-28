package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Farmacie;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.security.AdminPrinciple;
import com.licenta.backend.LicentaBackend.security.DoctorSpitalPrinciple;
import com.licenta.backend.LicentaBackend.security.UserPrinciple;
import com.licenta.backend.LicentaBackend.service.AdminService;
import com.licenta.backend.LicentaBackend.service.FarmacieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private FarmacieService farmacieService;

    @PutMapping("approveDoctor/{id}")
    public ResponseEntity<?> approveDoctor(@AuthenticationPrincipal AdminPrinciple adminPrinciple, @PathVariable Long id){
        adminService.approveDoctorSpital(id);
        return ResponseEntity.ok(true);
    }

    @PutMapping("approveFarmacist/{id}")
    public ResponseEntity<?> approveFarmacist(@AuthenticationPrincipal AdminPrinciple adminPrinciple, @PathVariable Long id){
        adminService.approveFarmacist(id);
        return ResponseEntity.ok(true);
    }

    @PutMapping("change/{doctorId}")
    public ResponseEntity<?> changeDoctorRole(@AuthenticationPrincipal AdminPrinciple adminPrinciple, @PathVariable Long doctorId){
        adminService.changeDoctorRole(doctorId);

        return ResponseEntity.ok(true);
    }

    @PostMapping("savefarmacie")
    public ResponseEntity<?> saveFarmacie(@AuthenticationPrincipal AdminPrinciple adminPrinciple, @RequestBody Farmacie farmacie){
        return new ResponseEntity<>(farmacieService.saveFarmacie(farmacie), HttpStatus.CREATED);
    }

    @PutMapping("changeadmin/{adminId}")
    public ResponseEntity<?> changeAdminRole(@AuthenticationPrincipal AdminPrinciple adminPrinciple, @PathVariable Long adminId){
        adminService.changeAdminRole(adminId);
        return ResponseEntity.ok(true);
    }

    @GetMapping("getAllUnapprovedFarmacisti")
    public ResponseEntity<?> getAllUnapprovedFarmacisti(){
        return new ResponseEntity<>(adminService.findAllUnapprovedFarmacisti(), HttpStatus.OK);
    }

    @GetMapping("getAllUnapprovedDoctors")
    public ResponseEntity<?> getAllUnapprovedDoctors(){
        return new ResponseEntity<>(adminService.findAllUnapprovedDoctors(), HttpStatus.OK);
    }
}

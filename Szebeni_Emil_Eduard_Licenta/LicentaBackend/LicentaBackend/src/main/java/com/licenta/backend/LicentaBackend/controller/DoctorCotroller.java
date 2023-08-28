package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Prescriere;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.service.DoctorSpitalService;
import com.licenta.backend.LicentaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/doctor")
public class DoctorCotroller {

    @Autowired
    private DoctorSpitalService doctorSpitalService;

    @Autowired
    private UserService userService;

    @GetMapping("gettrimitere/{numeDoctorDeTrimis}/{prenumeDoctorDeTrimis}/{institutieDoctorDeTrimis}")
    public List<Trimitere> getTrimitereByName(@PathVariable String numeDoctorDeTrimis, @PathVariable String prenumeDoctorDeTrimis, @PathVariable String institutieDoctorDeTrimis){
        return doctorSpitalService.findYourTrimitere(numeDoctorDeTrimis, prenumeDoctorDeTrimis, institutieDoctorDeTrimis);
    }

    @GetMapping
    public ResponseEntity<?> getAllDoctors(){

        return new ResponseEntity<>(doctorSpitalService.findAllDoctors(), HttpStatus.OK);
    }

    @GetMapping("getDoctorSpital/{doctorId}")
    public ResponseEntity<?> getAllDoctorsById(@PathVariable Long doctorId){

        return new ResponseEntity<>(doctorSpitalService.findDoctorSpitalById(doctorId), HttpStatus.OK);
    }

    @GetMapping("getUserByNumeDoctorFamilie/{numeDoctorFamilie}/{prenumeDoctorFamilie}")
    public ResponseEntity<?> getUsersByNumeDoctorFamilie(@PathVariable String numeDoctorFamilie, @PathVariable String prenumeDoctorFamilie){
        return new ResponseEntity<>(userService.findAllByNumeDoctorFamilie(numeDoctorFamilie, prenumeDoctorFamilie), HttpStatus.OK);
    }

    @DeleteMapping("deleteDoctor/{doctorId}")
    public ResponseEntity<?> deleteDoctor(@PathVariable Long doctorId){
        doctorSpitalService.deleteDoctorById(doctorId);
        return ResponseEntity.ok("Doctor deleted successfully");
    }

}

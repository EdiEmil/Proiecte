package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Prescriere;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.security.UserPrinciple;
import com.licenta.backend.LicentaBackend.service.DoctorSpitalService;
import com.licenta.backend.LicentaBackend.service.PrescriereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/prescriere")
public class PrescriereController {

    @Autowired
    private PrescriereService prescriereService;

    @Autowired
    private DoctorSpitalService doctorSpitalService;

    @PostMapping
    public ResponseEntity<?> savePrescriere(@RequestBody Prescriere prescriere){

        return new ResponseEntity<>(prescriereService.savePrescriere(prescriere), HttpStatus.CREATED);
    }

    @GetMapping("getprescriere/{cnp}")
    public ResponseEntity<?> findPrescriereByPacientCnp(@PathVariable String cnp){
        return new ResponseEntity<>(prescriereService.findPrescriereByPacientCnp(cnp), HttpStatus.OK);
    }

    @GetMapping("getprescrierebyid/{id}")
    public ResponseEntity<?> findPrescriereByPacientId(@PathVariable Long id){
        return new ResponseEntity<>(prescriereService.findPrescriereById(id), HttpStatus.OK);
    }

    @PutMapping("updatePrescriere/{prescriereId}/{farmacieId}")
    public ResponseEntity<?> updatePrescriere(@AuthenticationPrincipal UserPrinciple userPrinciple, @PathVariable Long prescriereId, @PathVariable Long farmacieId){
        prescriereService.updatePrescriere(prescriereId,farmacieId);
        return ResponseEntity.ok(true);
    }

    @GetMapping("getPrescriereByFarmacieId/{farmacieId}")
    public ResponseEntity<?> getPrescriereByFarmacieId(@PathVariable Long farmacieId){
        return new ResponseEntity<>(prescriereService.getPrescriereByFarmacieId(farmacieId), HttpStatus.OK) ;
    }

}

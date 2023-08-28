package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Prescriere;
import com.licenta.backend.LicentaBackend.service.FarmacistService;
import com.licenta.backend.LicentaBackend.service.PrescriereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/farmacist")
public class FarmacistController {

    @Autowired
    private PrescriereService prescriereService;

    @Autowired
    private FarmacistService farmacistService;

    @GetMapping("getprescriere/{farmacieDeTrimis}/{farmacieId}")
    public List<Prescriere> getPrescriereByFarmacist(@PathVariable String farmacieDeTrimis, @PathVariable Long id){
        return prescriereService.findPrescriereByFarmacist(farmacieDeTrimis,id);
    }

    @GetMapping("getFarmacist/{farmacistId}")
    public ResponseEntity<?> getFarmacistById(@PathVariable Long farmacistId){
        return  new ResponseEntity<>(farmacistService.findFarmacistById(farmacistId), HttpStatus.OK);
    }

//    @PutMapping("updateFarmacieForFarmacist/{numeFarmacie}/{orasFarmacie}/{stradaFarmacie}/{nrFarmacie}/{farmacistId}")
//    public ResponseEntity<?> updateFarmacieForFarmacist(@PathVariable String numeFarmacie, @PathVariable String orasFarmacie, @PathVariable String stradaFarmacie, @PathVariable Long nrFarmacie, @PathVariable Long farmacistId){
//        farmacistService.updateFarmacieForFarmacist(numeFarmacie,orasFarmacie,stradaFarmacie,nrFarmacie,farmacistId);
//
//        return ResponseEntity.ok(true);
//    }

    @PutMapping("updateFarmacist/{farmacieId}/{farmacistId}")
    public ResponseEntity<?> updateFarmacistByFarmacieId(@PathVariable Long farmacieId, @PathVariable Long farmacistId){
        farmacistService.updateFarmacistByFarmacieId(farmacieId,farmacistId);

        return ResponseEntity.ok(true);
    }

    @DeleteMapping("deleteFarmacist/{farmacistId}")
    public ResponseEntity<?> deleteFarmacistById(@PathVariable Long farmacistId){
        farmacistService.deleteFarmacistById(farmacistId);

        return ResponseEntity.ok(true);
    }

}

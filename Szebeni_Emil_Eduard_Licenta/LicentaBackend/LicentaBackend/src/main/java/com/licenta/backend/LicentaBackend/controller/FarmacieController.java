package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Farmacie;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.service.FarmacieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/farmacie")
public class FarmacieController {

    @Autowired
    private FarmacieService farmacieService;

    @GetMapping("getFarmacieByNume/{numeFarmacie}")
    public List<Farmacie> getFarmacieByNume(@PathVariable String numeFarmacie){
        return farmacieService.findFarmacieByNume(numeFarmacie);
    }

    @GetMapping("getFarmacieByOras/{orasFarmacie}")
    public List<Farmacie> getFarmacieByOras(@PathVariable String orasFarmacie){
        return farmacieService.findFarmacieByOras(orasFarmacie);
    }

    @GetMapping("getFarmacieByNumeAndOras/{numeFarmacie}/{orasFarmacie}")
    public List<Farmacie> getFarmacieByNumeAndOras(@PathVariable String numeFarmacie, @PathVariable String orasFarmacie){
        return farmacieService.findFarmacieByNumeAndOras(numeFarmacie, orasFarmacie);
    }

    @GetMapping("getFarmacieByNumeAndStrada/{numeFarmacie}/{stradaFarmacie}")
    public List<Farmacie> getFarmacieByNumeAndStrada(@PathVariable String numeFarmacie, @PathVariable String stradaFarmacie){
        return farmacieService.findFarmacieByNumeAndStrada(numeFarmacie, stradaFarmacie);
    }

    @GetMapping("getFarmacieByNumeAndOrasAndStrada/{numeFarmacie}/{orasFarmacie}/{stradaFarmacie}")
    public List<Farmacie> getFarmacieByNumeAndOrasAndStrada(@PathVariable String numeFarmacie, @PathVariable String orasFarmacie, @PathVariable String stradaFarmacie){
        return farmacieService.findFarmacieByNumeAndOrasAndStrada(numeFarmacie,orasFarmacie,stradaFarmacie);
    }

    @GetMapping("getFarmacieByNumeAndOrasAndStradaAndNumar/{numeFarmacie}/{orasFarmacie}/{stradaFarmacie}/{numarFarmacie}")
    public List<Farmacie> getFarmacieByNumeAndOrasAndStradaAndNumar(@PathVariable String numeFarmacie, @PathVariable String orasFarmacie, @PathVariable String stradaFarmacie, @PathVariable Long numarFarmacie){
        return farmacieService.findFarmacieByNumeAndOrasAndStradaAndNumar(numeFarmacie, orasFarmacie, stradaFarmacie, numarFarmacie);
    }

    @GetMapping("getAllFarmacii")
    public List<Farmacie> getAllFarmacii(){
        return farmacieService.findAllFarmacii();
    }

    @GetMapping("getFarmacieById/{id}")
    public ResponseEntity<?> getFarmacieById(@PathVariable Long id){
        return new ResponseEntity<>(farmacieService.findFarmacieById(id), HttpStatus.OK);
    }
}

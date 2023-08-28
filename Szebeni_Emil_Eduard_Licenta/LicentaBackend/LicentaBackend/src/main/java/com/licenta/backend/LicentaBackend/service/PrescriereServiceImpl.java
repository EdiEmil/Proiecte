package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Prescriere;
import com.licenta.backend.LicentaBackend.repository.PrescriereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriereServiceImpl implements PrescriereService {

    @Autowired
    private PrescriereRepository prescriereRepository;

    @Override
    public Prescriere savePrescriere(Prescriere prescriere){

        return prescriereRepository.save(prescriere);
    }

    @Override
    public List<Prescriere> findPrescriereByFarmacist(String farmacieDeTrimis, Long farmacieId){

        return prescriereRepository.findByFarmacieDeTrimisAndFarmacieId(farmacieDeTrimis, farmacieId);
    }

    @Override
    public List<Prescriere> findPrescriereByPacientCnp(String cnp){
        return prescriereRepository.findByCnp(cnp);
    }

    @Override
    public Optional<Prescriere> findPrescriereById(Long id){
        return prescriereRepository.findById(id);
    }

    @Override
    @Transactional
    public ResponseEntity<?> updatePrescriere(Long prescriereId, Long farmacieId){
        Optional<Prescriere> optionalPrescriere = prescriereRepository.findById(prescriereId);

        if(optionalPrescriere.isPresent()){
            Prescriere existingPrescriere = optionalPrescriere.get();
            existingPrescriere.setFarmacieId(farmacieId);

            prescriereRepository.save(existingPrescriere);

            return ResponseEntity.ok("Succesful Update");
        }
        return null;
    }

    @Override
    public List<Prescriere> getPrescriereByFarmacieId(Long farmacieId){
        return prescriereRepository.findAllByFarmacieId(farmacieId);
    }
}

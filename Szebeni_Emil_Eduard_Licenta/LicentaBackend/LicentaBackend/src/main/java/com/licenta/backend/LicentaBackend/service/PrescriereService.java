package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Prescriere;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface PrescriereService {
    Prescriere savePrescriere(Prescriere prescriere);

    List<Prescriere> findPrescriereByFarmacist(String farmacieDeTrimis, Long farmacieId);

    List<Prescriere> findPrescriereByPacientCnp(String cnp);

    Optional<Prescriere> findPrescriereById(Long id);

    @Transactional
    ResponseEntity<?> updatePrescriere(Long prescriereId, Long farmacieId);

    List<Prescriere> getPrescriereByFarmacieId(Long farmacieId);
}

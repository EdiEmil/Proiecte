package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Farmacist;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface FarmacistService {
    Farmacist saveFarmacist(Farmacist farmacist);

    Optional<Farmacist> findByUsername(String username);

    List<Farmacist> findFarmacistById(Long id);

    @Transactional
    void updateFarmacistByFarmacieId(Long farmacieId, Long farmacistId);

    void deleteFarmacistById(Long farmacistId);

//    @Transactional
//    void updateFarmacieForFarmacist(String numeFarmacie, String orasFarmacie, String stradaFarmacie, Long nrFarmacie, Long farmacistId);
}

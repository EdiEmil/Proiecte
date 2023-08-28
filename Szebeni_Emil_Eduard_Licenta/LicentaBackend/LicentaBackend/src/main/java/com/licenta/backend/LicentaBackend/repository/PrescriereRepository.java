package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Prescriere;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrescriereRepository extends JpaRepository<Prescriere,Long> {

    List<Prescriere> findByFarmacieDeTrimisAndFarmacieId(String farmacieDeTrimis, Long famacieId);
    List<Prescriere> findByCnp(String cnp);
    Optional<Prescriere> findById(Long id);

    List<Prescriere> findAllByFarmacieId(Long id);
}

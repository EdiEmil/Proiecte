package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Farmacie;

import java.util.List;
import java.util.Optional;

public interface FarmacieService {
    Farmacie saveFarmacie(Farmacie farmacie);

    List<Farmacie> findFarmacieByNume(String nume);

    List<Farmacie> findFarmacieByOras(String oras);

    List<Farmacie> findFarmacieByNumeAndOras(String nume, String oras);

    List<Farmacie> findFarmacieByNumeAndStrada(String nume, String strada);

    List<Farmacie> findFarmacieByOrasAndStrada(String oras, String strada);

    List<Farmacie> findFarmacieByNumeAndOrasAndStrada(String nume, String oras, String strada);


    List<Farmacie> findFarmacieByNumeAndOrasAndStradaAndNumar(String nume, String oras, String strada, Long numar);

    List<Farmacie> findAllFarmacii();


    Optional<Farmacie> findFarmacieById(Long id);


}

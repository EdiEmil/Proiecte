package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Farmacie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FarmacieRepository extends JpaRepository<Farmacie,Long> {

    List<Farmacie> findAllByNume(String nume);

    List<Farmacie> findAllByOras(String oras);

    List<Farmacie> findAllByNumeAndOras(String nume, String oras);

    List<Farmacie> findAllByNumeAndStrada(String nume, String strada);

    List<Farmacie> findAllByOrasAndStrada(String oras, String strada);

    List<Farmacie> findAllByNumeAndOrasAndStrada(String nume, String oras, String strada);

    List<Farmacie> findByNumeAndOrasAndStradaAndNumar(String nume, String oras, String strada, Long numar);

    List<Farmacie> findAll();

    Optional<Farmacie> findById(Long id);
}

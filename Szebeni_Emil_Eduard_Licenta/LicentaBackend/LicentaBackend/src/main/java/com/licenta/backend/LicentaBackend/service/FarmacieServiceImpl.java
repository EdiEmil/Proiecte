package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Farmacie;
import com.licenta.backend.LicentaBackend.repository.FarmacieRepository;
import com.licenta.backend.LicentaBackend.repository.FarmacistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FarmacieServiceImpl implements FarmacieService{

    @Autowired
    private FarmacieRepository farmacieRepository;

    @Autowired
    private FarmacistRepository farmacistRepository;

    @Override
    public Farmacie saveFarmacie(Farmacie farmacie){
        return farmacieRepository.save(farmacie);
    }

    @Override
    public List<Farmacie> findFarmacieByNume(String nume){
        return farmacieRepository.findAllByNume(nume);
    }

    @Override
    public List<Farmacie> findFarmacieByOras(String oras){
        return farmacieRepository.findAllByOras(oras);
    }

    @Override
    public List<Farmacie> findFarmacieByNumeAndOras(String nume, String oras){
        return farmacieRepository.findAllByNumeAndOras(nume, oras);
    }

    @Override
    public List<Farmacie> findFarmacieByNumeAndStrada(String nume, String strada){
        return farmacieRepository.findAllByNumeAndStrada(nume, strada);
    }

    @Override
    public List<Farmacie> findFarmacieByOrasAndStrada(String oras, String strada){
        return farmacieRepository.findAllByOrasAndStrada(oras,strada);
    }

    @Override
    public List<Farmacie> findFarmacieByNumeAndOrasAndStrada(String nume, String oras, String strada){
        return farmacieRepository.findAllByNumeAndOrasAndStrada(nume,oras,strada);
    }

    @Override
    public List<Farmacie> findFarmacieByNumeAndOrasAndStradaAndNumar(String nume, String oras, String strada, Long numar){
        return farmacieRepository.findByNumeAndOrasAndStradaAndNumar(nume,oras,strada,numar);
    }

    @Override
    public List<Farmacie> findAllFarmacii(){
        return farmacieRepository.findAll();
    }

    @Override
    public Optional<Farmacie> findFarmacieById(Long id){
        return farmacieRepository.findById(id);
    }


}

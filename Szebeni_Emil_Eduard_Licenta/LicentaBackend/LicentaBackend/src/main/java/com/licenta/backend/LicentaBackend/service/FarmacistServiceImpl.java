package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.repository.FarmacistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FarmacistServiceImpl implements FarmacistService{

    @Autowired
    private FarmacistRepository farmacistRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Farmacist saveFarmacist(Farmacist farmacist){
        farmacist.setPassword(passwordEncoder.encode(farmacist.getPassword()));
        farmacist.setRole(Role.FARMACIST);
        farmacist.setCreateTime(LocalDateTime.now());
        farmacist.setApproved(false);

        return farmacistRepository.save(farmacist);
    }

    @Override
    public Optional<Farmacist> findByUsername(String username){

        return farmacistRepository.findByUsername(username);
    }

    @Override
    public List<Farmacist> findFarmacistById(Long id){
        return farmacistRepository.findFarmacistById(id);
    }

//    @Override
//    @Transactional
//    public void updateFarmacieForFarmacist(String numeFarmacie, String orasFarmacie, String stradaFarmacie, Long nrFarmacie, Long farmacistId){
//        farmacistRepository.updateFarmacieForFarmacist(numeFarmacie,orasFarmacie,stradaFarmacie,nrFarmacie,farmacistId);
//    }

    @Override
    @Transactional
    public void updateFarmacistByFarmacieId(Long farmacieId, Long farmacistId){
        farmacistRepository.updateFarmacieIdById(farmacieId,farmacistId);
    }

    @Override
    public void deleteFarmacistById(Long farmacistId){
        farmacistRepository.deleteById(farmacistId);
    }

}

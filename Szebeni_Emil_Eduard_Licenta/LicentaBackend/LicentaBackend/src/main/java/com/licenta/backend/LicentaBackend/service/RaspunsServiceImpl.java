package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Raspuns;
import com.licenta.backend.LicentaBackend.repository.RaspunsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
public class RaspunsServiceImpl implements RaspunsService{

    @Autowired
    private RaspunsRepository raspunsRepository;

    @Override
    public Raspuns saveRaspuns(Long farmacistId,String pacientCnp,Raspuns raspuns){
      LocalDateTime now = LocalDateTime.now();
      LocalDateTime date = now.truncatedTo(ChronoUnit.MINUTES);

        raspuns.setCreateTime(date);
        raspuns.setFarmacistId(farmacistId);
        raspuns.setPacientCnp(pacientCnp);

        return raspunsRepository.save(raspuns);
    }

    @Override
    public List<Raspuns> getRaspunsByPacientCnp(String pacientCnp){
       return raspunsRepository.findRaspunsByPacientCnp(pacientCnp);
    }

    @Override
    public Optional<Raspuns> getRaspunsById(Long id){
        return raspunsRepository.findById(id);
    }

    @Override
    public void deleteRaspuns(Long id){
        raspunsRepository.deleteById(id);
    }

}

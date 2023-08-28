package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.repository.TrimitereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrimitereServiceImpl implements TrimitereService{

    @Autowired
    private TrimitereRepository trimitereRepository;

    @Override
    public Trimitere saveTrimitere(Trimitere trimitere){

        return trimitereRepository.save(trimitere);
    }

    @Override
    public Optional<Trimitere> getTrimitereById(Long id){

        return trimitereRepository.findById(id);
    }

    @Override
    public List<Trimitere> getTrimitereByUserName(String name){

        return trimitereRepository.findByNume(name);
    }

    @Override
    public List<Trimitere> getTrimitereByUserCnp(String cnp){
        return trimitereRepository.findByCnp(cnp);
    }


}

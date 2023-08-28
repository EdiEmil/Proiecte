package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Trimitere;

import java.util.List;
import java.util.Optional;

public interface TrimitereService {
    Trimitere saveTrimitere(Trimitere trimitere);

    Optional<Trimitere> getTrimitereById(Long id);

    List<Trimitere> getTrimitereByUserName(String name);

    List<Trimitere> getTrimitereByUserCnp(String cnp);
}

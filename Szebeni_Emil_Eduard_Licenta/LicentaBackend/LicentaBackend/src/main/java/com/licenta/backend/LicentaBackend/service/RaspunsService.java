package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Raspuns;

import java.util.List;
import java.util.Optional;

public interface RaspunsService {
    Raspuns saveRaspuns(Long farmacistId, String pacientCnp, Raspuns raspuns);

    List<Raspuns> getRaspunsByPacientCnp(String pacientCnp);

    Optional<Raspuns> getRaspunsById(Long id);

    void deleteRaspuns(Long id);
}

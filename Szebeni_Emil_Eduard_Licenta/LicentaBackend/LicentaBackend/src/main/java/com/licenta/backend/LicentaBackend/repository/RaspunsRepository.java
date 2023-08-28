package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Raspuns;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RaspunsRepository extends JpaRepository<Raspuns,Long> {

    List<Raspuns> findRaspunsByPacientCnp(String pacientCnp);
    Optional<Raspuns> findById(Long id);
}

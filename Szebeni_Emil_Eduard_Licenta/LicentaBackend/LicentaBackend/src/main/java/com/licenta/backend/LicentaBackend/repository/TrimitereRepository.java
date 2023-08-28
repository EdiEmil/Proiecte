package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Trimitere;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TrimitereRepository extends JpaRepository<Trimitere,Long> {

    List<Trimitere> findByNume(String name);
    List<Trimitere> findByNumeDoctorDeTrimisAndPrenumeDoctorDeTrimisAndInstitutieDoctorDeTrimis(String numeDoctorDeTrimis, String prenumeDoctorDeTrimis, String institutieDoctorDeTrimis);

    Optional<Trimitere> findById(Long id);

    Trimitere findBySerie(String serie);

    List<Trimitere> findByCnp(String cnp);
}

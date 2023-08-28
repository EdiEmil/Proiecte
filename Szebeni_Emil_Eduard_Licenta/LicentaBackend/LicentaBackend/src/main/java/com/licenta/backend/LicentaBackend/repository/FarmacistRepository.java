package com.licenta.backend.LicentaBackend.repository;

import com.licenta.backend.LicentaBackend.models.Farmacist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface FarmacistRepository extends JpaRepository<Farmacist,Long> {

    Optional<Farmacist> findByUsername(String username);
    List<Farmacist> findFarmacistById(Long id);

    List<Farmacist> findByFarmacieId(Long farmacieId);

//    @Modifying
//    @Query("update Farmacist f set f.numeFarmacie = :numeFarmacie, f.orasFarmacie = :orasFarmacie, f.stradaFarmacie = :stradaFarmacie, f.nrFarmacie = :nrFarmacie, where f.id = :farmacistId")
//    void updateFarmacieForFarmacist(@Param("numeFarmacie") String numeFarmacie, @Param("orasFarmacie") String orasFarmacie,@Param("stradaFarmacie") String stradaFarmacie,@Param("nrFarmacie") Long nrFarmacie, @Param("farmacistId") Long farmacistId);

    @Modifying
    @Query("update Farmacist t set t.farmacieId = :farmacieIdParam where t.id = :idParam")
    void updateFarmacieIdById(Long farmacieIdParam, Long idParam);
}

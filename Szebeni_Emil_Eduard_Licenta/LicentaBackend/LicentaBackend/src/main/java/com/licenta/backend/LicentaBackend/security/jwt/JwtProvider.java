package com.licenta.backend.LicentaBackend.security.jwt;

import com.licenta.backend.LicentaBackend.security.AdminPrinciple;
import com.licenta.backend.LicentaBackend.security.DoctorSpitalPrinciple;
import com.licenta.backend.LicentaBackend.security.FarmacistPrinciple;
import com.licenta.backend.LicentaBackend.security.UserPrinciple;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface JwtProvider {


    String generateTokenforUser(UserPrinciple auth);

    String generateTokenforDoctorSpital(DoctorSpitalPrinciple auth);

    String generateTokenforAdmin(AdminPrinciple auth);

    String generateTokenforFarmacist(FarmacistPrinciple auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);
}

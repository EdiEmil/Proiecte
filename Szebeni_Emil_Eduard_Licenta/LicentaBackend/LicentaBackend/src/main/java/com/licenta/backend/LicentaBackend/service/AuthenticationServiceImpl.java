package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.User;
import com.licenta.backend.LicentaBackend.security.AdminPrinciple;
import com.licenta.backend.LicentaBackend.security.DoctorSpitalPrinciple;
import com.licenta.backend.LicentaBackend.security.FarmacistPrinciple;
import com.licenta.backend.LicentaBackend.security.UserPrinciple;
import com.licenta.backend.LicentaBackend.security.jwt.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private DoctorSpitalService doctorSpitalService;

    @Override
    public User signInAndReturnJWT(User signInRequest) {

        // vrem sa convertim din user info in authentication object
        //springSecurity are o clasa pentru credentiale: UsernamePasswordAuthentication

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword())
        );

        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();

        String jwt = jwtProvider.generateTokenforUser(userPrinciple);

        User signInUser = userPrinciple.getUser();
        signInUser.setToken(jwt);

        return signInUser;
    }

    @Override
    public DoctorSpital signInAndReturnJWT(DoctorSpital signInRequest) {

        // vrem sa convertim din user info in authentication object
        //springSecurity are o clasa pentru credentiale: UsernamePasswordAuthentication

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword())
        );

        DoctorSpitalPrinciple doctorSpitalPrinciple = (DoctorSpitalPrinciple) authentication.getPrincipal();

        String jwt = jwtProvider.generateTokenforDoctorSpital(doctorSpitalPrinciple);

        DoctorSpital signInDoctorSpital = doctorSpitalPrinciple.getDoctorSpital();
        signInDoctorSpital.setToken(jwt);


        return signInDoctorSpital;

    }

    @Override
    public Admin signInAndReturnJWT(Admin signInRequest) {

        // vrem sa convertim din user info in authentication object
        //springSecurity are o clasa pentru credentiale: UsernamePasswordAuthentication

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword())
        );

         AdminPrinciple adminPrinciple = (AdminPrinciple) authentication.getPrincipal();

        String jwt = jwtProvider.generateTokenforAdmin(adminPrinciple);

        Admin signInAdmin = adminPrinciple.getAdmin();
        signInAdmin.setToken(jwt);


        return signInAdmin;

    }

    @Override
    public Farmacist signInAndReturnJWT(Farmacist signInRequest){
        // vrem sa convertim din user info in authentication object
        //springSecurity are o clasa pentru credentiale: UsernamePasswordAuthentication

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword())
        );

        FarmacistPrinciple farmacistPrinciple = (FarmacistPrinciple) authentication.getPrincipal();

        String jwt = jwtProvider.generateTokenforFarmacist(farmacistPrinciple);

        Farmacist signInFarmacist = farmacistPrinciple.getFarmacist();
        signInFarmacist.setToken(jwt);


        return signInFarmacist;
    }
}

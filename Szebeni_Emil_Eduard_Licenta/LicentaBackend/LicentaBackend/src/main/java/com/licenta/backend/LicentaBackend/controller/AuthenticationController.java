package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.User;
import com.licenta.backend.LicentaBackend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;

    @Autowired
    private DoctorSpitalService doctorSpitalService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private FarmacistService farmacistService;

    @PostMapping("sign-up/user")
    public ResponseEntity<?> signUp(@RequestBody User user){

        if(userService.findByUsername(user.getUsername()).isPresent()){ // nu putem sa avem 2 username-uri la fel

            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PostMapping("sign-up/doctor")
    public ResponseEntity<?> signUp(@RequestBody DoctorSpital doctorSpital) {

        if(doctorSpitalService.findByUsername(doctorSpital.getUsername()).isPresent()){ // nu putem sa avem 2 username-uri la fel

            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(doctorSpitalService.saveDoctorSpital(doctorSpital), HttpStatus.CREATED);
    }

    @PostMapping("sign-up/admin")
    public ResponseEntity<?> signUp(@RequestBody Admin admin){

        if(adminService.findByUsername(admin.getUsername()).isPresent()){ // nu putem sa avem 2 username-uri la fel

            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(adminService.saveAdmin(admin), HttpStatus.CREATED);
    }

    @PostMapping("sign-up/farmacist")
    public ResponseEntity<?> signUp(@RequestBody Farmacist farmacist){

        if(farmacistService.findByUsername(farmacist.getUsername()).isPresent()){ // nu putem sa avem 2 username-uri la fel

            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(farmacistService.saveFarmacist(farmacist), HttpStatus.CREATED);
    }



    @PostMapping("sign-in/user")
    public ResponseEntity<?> signIn(@RequestBody User user){

        return new ResponseEntity<>(authenticationService.signInAndReturnJWT(user), HttpStatus.OK);
    }

    @PostMapping("sign-in/doctor")
    public ResponseEntity<?> signIn(@RequestBody DoctorSpital doctorSpital){
            return new ResponseEntity<>(authenticationService.signInAndReturnJWT(doctorSpital), HttpStatus.OK);

    }

    @PostMapping("sign-in/admin")
    public ResponseEntity<?> signIn(@RequestBody Admin admin){
        return new ResponseEntity<>(authenticationService.signInAndReturnJWT(admin), HttpStatus.OK);

    }

    @PostMapping("sign-in/farmacist")
    public ResponseEntity<?> signIn(@RequestBody Farmacist farmacist){
        return new ResponseEntity<>(authenticationService.signInAndReturnJWT(farmacist), HttpStatus.OK);
    }
}

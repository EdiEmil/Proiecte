package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.security.UserPrinciple;
import com.licenta.backend.LicentaBackend.service.RaspunsService;
import com.licenta.backend.LicentaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RaspunsService raspunsService;

    @PostMapping("sendtrimitere/{serie}")
    public ResponseEntity<?> sendTrimitere(@RequestBody Trimitere trimitere, @PathVariable String  serie){

        return new ResponseEntity<>(userService.updateDoctorDeTrimis(trimitere,serie), HttpStatus.CREATED);
    }

    @GetMapping("getuser/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable Long userId){

        return new ResponseEntity<>(userService.findUserById(userId), HttpStatus.OK);
    }

    @GetMapping("getdoctors/{doctorLastName}")
    public ResponseEntity<?> getDoctorByLastName(@PathVariable String doctorLastName){

        return new ResponseEntity<>(userService.findDoctorByLastName(doctorLastName), HttpStatus.OK);
    }

    @PutMapping("updateDoctorForUser/{numeDoctorForUser}/{prenumeDoctorForUser}/{userId}")
    public ResponseEntity<?> updateDoctorForUser(@AuthenticationPrincipal UserPrinciple userPrinciple, @PathVariable String numeDoctorForUser,@PathVariable String prenumeDoctorForUser ,@PathVariable Long userId){
        userService.updateDoctorForUser(numeDoctorForUser,prenumeDoctorForUser ,userId);
        return ResponseEntity.ok(true);
    }

    @GetMapping("getRaspuns/{pacientCnp}")
    public ResponseEntity<?> getRaspuns(@PathVariable String pacientCnp){
        return new ResponseEntity<>(raspunsService.getRaspunsByPacientCnp(pacientCnp), HttpStatus.OK);
    }


}

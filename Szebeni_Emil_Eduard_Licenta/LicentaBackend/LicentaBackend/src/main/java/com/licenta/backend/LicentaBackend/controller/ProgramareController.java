package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Programare;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.service.ProgramareService;
import com.licenta.backend.LicentaBackend.service.TrimitereService;
import com.licenta.backend.LicentaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/programare")
public class ProgramareController {

    @Autowired
    private ProgramareService programareService;

    @Autowired
    private TrimitereService trimitereService;

    @Autowired
    private UserService userService;

    @PostMapping("/create/{userId}/{trimitereId}")
    public ResponseEntity<?> createProgramare(@RequestBody Programare programare,@PathVariable Long userId, @PathVariable Long trimitereId){

        return new ResponseEntity<>(programareService.saveProgramare(userId,trimitereId ,programare), HttpStatus.CREATED);
    }

//    @GetMapping("/getprogramare/{cnpPacient}")
//    public ResponseEntity<?> getProgramareByPacientCnp(@PathVariable String cnp){
//
//        return new ResponseEntity<>(programareService.getProgramareByPacientCnp(cnp), HttpStatus.OK);
//    }

//    @GetMapping("/getprogramare/{userId}")
//    public ResponseEntity<?> getProgramareByUserId(@PathVariable Long userId){
//        return  new ResponseEntity<>(programareService.getProgramareByUser(userId), HttpStatus.OK);
//    }

//    @GetMapping("/getprogramare/{numeDoctor}/{prenumeDoctor}/{sectie}")
//    public ResponseEntity<?> getProgramareByNumeDoctorAndPrenumeDoctorAndSectie(@PathVariable String numeDoctor, @PathVariable String prenumeDoctor, @PathVariable String sectie){
//       return new ResponseEntity<>(programareService.getProgramareByNumeDoctorPrenumeDoctorSectie(numeDoctor,prenumeDoctor,sectie), HttpStatus.OK);
//    }

    @GetMapping("/getprogramareById/{programareId}")
    public ResponseEntity<?> getProgramareById(@PathVariable Long programareId){
        return new ResponseEntity<>(programareService.getProgramareById(programareId), HttpStatus.OK);
    }

    @GetMapping("/getProgramareByPacientId/{pacientId}")
    public ResponseEntity<?> getProgramareByPacientId(@PathVariable Long pacientId){
        return new ResponseEntity<>(programareService.getProgramareByPacientId(pacientId), HttpStatus.OK);
    }

    @GetMapping("/getProgramareByDoctor/{numeDoctor}/{prenumeDoctor}/{sectieDoctor}")
    public ResponseEntity<?> getProgramareForDoctor(@PathVariable String numeDoctor, @PathVariable String prenumeDoctor, @PathVariable String sectieDoctor){
        return new ResponseEntity<>(programareService.getProgramareByDoctor(numeDoctor,prenumeDoctor,sectieDoctor), HttpStatus.OK);
    }

    @GetMapping("/getProgramareByDoctorNou/{numeDoctor}/{prenumeDoctor}/{spital}")
    public ResponseEntity<?> getProgramareForDoctorNou(@PathVariable String numeDoctor, @PathVariable String prenumeDoctor, @PathVariable String spital){
        return new ResponseEntity<>(programareService.getProgramareByDoctorNou(numeDoctor, prenumeDoctor, spital), HttpStatus.OK);
    }

    @GetMapping("/getTrimitereByTrimitereId/{trimiterePacientId}")
    public ResponseEntity<?> getTrimitereByTrimiterePacientId(@PathVariable Long trimiterePacientId){
        return new ResponseEntity<>(trimitereService.getTrimitereById(trimiterePacientId), HttpStatus.OK);
    }
}

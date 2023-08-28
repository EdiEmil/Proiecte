package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Raspuns;
import com.licenta.backend.LicentaBackend.service.RaspunsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/raspuns")
public class RaspunsController {

    @Autowired
    private RaspunsService raspunsService;

    @PostMapping("create/{farmacistId}/{pacientCnp}")
    public ResponseEntity<?> createRaspuns(@PathVariable Long farmacistId, @PathVariable String pacientCnp, @RequestBody Raspuns raspuns){

        return new ResponseEntity<>(raspunsService.saveRaspuns(farmacistId,pacientCnp,raspuns), HttpStatus.CREATED);
    }

    @GetMapping("getRaspuns/{id}")
    public ResponseEntity<?> getRaspuns(@PathVariable Long id){
        return new ResponseEntity<>(raspunsService.getRaspunsById(id), HttpStatus.OK);
    }

    @DeleteMapping("deleteRaspuns/{id}")
    public ResponseEntity<?> deleteRaspuns(@PathVariable Long id){
        raspunsService.deleteRaspuns(id);
        return ResponseEntity.ok("Raspuns deleted successfully");
    }


}

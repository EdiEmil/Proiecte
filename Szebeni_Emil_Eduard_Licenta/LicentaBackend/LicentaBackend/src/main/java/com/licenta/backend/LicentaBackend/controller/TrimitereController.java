package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.service.TrimitereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/trimitere")
public class TrimitereController {

    @Autowired
    private TrimitereService trimitereService;

    @PostMapping
    public ResponseEntity<?> saveTrimitere(@RequestBody Trimitere trimitere){

        return new ResponseEntity<>(trimitereService.saveTrimitere(trimitere), HttpStatus.CREATED);
    }

    @GetMapping("viewbyid/{id}")
    public Optional<Trimitere> getTrimitereById(@PathVariable Long id){
        return trimitereService.getTrimitereById(id);
    }

    @GetMapping("viewbyname/{name}")
    public List<Trimitere> getTrimitereByName(@PathVariable String name){

        return trimitereService.getTrimitereByUserName(name);
    }

    @GetMapping("viewbycnp/{cnp}")
    public List<Trimitere> getTrimitereByCnp(@PathVariable String cnp){

        return trimitereService.getTrimitereByUserCnp(cnp);
    }
}

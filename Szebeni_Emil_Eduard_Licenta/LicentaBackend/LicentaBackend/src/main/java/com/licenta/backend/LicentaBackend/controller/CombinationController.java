package com.licenta.backend.LicentaBackend.controller;

import com.licenta.backend.LicentaBackend.utils.CombinationGenerator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("api/generate")
public class CombinationController {
    private int counter = 0;

    @GetMapping("getGenerate")
    public String generateCombinations(){
        List<String> combinations = CombinationGenerator.generateCombinations();
        if(counter < combinations.size()) {
           String combination = combinations.get(counter);
            counter++;
            return combination;
        } else {
            return "Nu mai exista combinatii disponibile";
        }
//        return CombinationGenerator.generateCombinations();
    }

    @GetMapping("getGenerateNumbers")
    public Long generateNumbersCombinations(){
        return CombinationGenerator.increaseNumber();
    }
}

package com.licenta.backend.LicentaBackend.utils;

import java.util.ArrayList;
import java.util.List;

public class CombinationGenerator {

    public static List<String> generateCombinations(){
        List<String> combinations = new ArrayList<>();
        generateCombinationsHelper("", "ABCDEFGH", combinations);
        return combinations;
    }

    private static void generateCombinationsHelper(String prefix, String remaining, List<String> combinations){
        if (remaining.length() == 0){
            combinations.add(prefix);
            return;
        }

        for (int i = 0; i < remaining.length(); i++){
            String newPrefix = prefix + remaining.charAt(i);
            String newRemaining = remaining.substring(0,i) + remaining.substring(i + 1);
            generateCombinationsHelper(newPrefix, newRemaining, combinations);
        }
    }

    private static Long number = 1L;
    public static Long increaseNumber(){
        number ++;
        return number;
    }


}

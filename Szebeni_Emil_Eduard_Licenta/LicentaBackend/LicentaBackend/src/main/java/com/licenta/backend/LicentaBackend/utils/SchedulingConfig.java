package com.licenta.backend.LicentaBackend.utils;

import com.licenta.backend.LicentaBackend.service.ProgramareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class SchedulingConfig {

    @Autowired
    private ProgramareService programareService;

    @Scheduled(cron = "0 0 0 * * ?")
    public void actualizareProgramari(){
        programareService.stergereProgramariVechi();
    }
}

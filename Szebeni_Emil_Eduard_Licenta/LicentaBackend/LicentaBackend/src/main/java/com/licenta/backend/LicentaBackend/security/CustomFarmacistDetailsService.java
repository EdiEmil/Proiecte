package com.licenta.backend.LicentaBackend.security;

import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.service.FarmacistService;
import com.licenta.backend.LicentaBackend.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CustomFarmacistDetailsService implements UserDetailsService {

    @Autowired
    private FarmacistService farmacistService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Farmacist farmacist = farmacistService.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));


        if(farmacist.isApproved()){
            Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(farmacist.getRole().name()));

            return FarmacistPrinciple.builder()
                    .farmacist(farmacist)
                    .id(farmacist.getId())
                    .username(farmacist.getUsername())
                    .password(farmacist.getPassword())
                    .authorities(authorities)
                    .build();
        }else {
            throw new UsernameNotFoundException("username not found");
        }



    }
}

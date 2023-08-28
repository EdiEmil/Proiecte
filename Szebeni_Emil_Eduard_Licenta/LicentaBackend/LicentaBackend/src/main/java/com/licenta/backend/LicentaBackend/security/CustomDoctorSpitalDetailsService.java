package com.licenta.backend.LicentaBackend.security;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.repository.DoctorSpitalRepository;
import com.licenta.backend.LicentaBackend.service.DoctorSpitalService;
import com.licenta.backend.LicentaBackend.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CustomDoctorSpitalDetailsService implements UserDetailsService {

    @Autowired
    private DoctorSpitalService doctorSpitalService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        DoctorSpital doctorSpital = doctorSpitalService.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        if(doctorSpital.isApproved()){
            Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(doctorSpital.getRole().name()));

            return DoctorSpitalPrinciple.builder()
                    .doctorSpital(doctorSpital)
                    .id(doctorSpital.getId())
                    .username(doctorSpital.getUsername())
                    .password(doctorSpital.getPassword())
                    .authorities(authorities)
                    .build();

        }else {
            throw new UsernameNotFoundException("username not found");
        }



    }

//    public DoctorSpitalRepository loadByFirstName(String firstName) throws ChangeSetPersister.NotFoundException {
//
//    }
}

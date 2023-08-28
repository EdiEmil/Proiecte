package com.licenta.backend.LicentaBackend.security;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.service.AdminService;
import com.licenta.backend.LicentaBackend.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CustomAdminDetailsService implements UserDetailsService {

    @Autowired
    private AdminService adminService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Admin admin = adminService.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(admin.getRole().name()));

        return AdminPrinciple.builder()
                .admin(admin)
                .id(admin.getId())
                .username(admin.getUsername())
                .password(admin.getPassword())
                .authorities(authorities)
                .build();
    }
}

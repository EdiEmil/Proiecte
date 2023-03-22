package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.Role;
import com.loginsecurityjwt.sppringlatestsecurity.model.User;
import com.loginsecurityjwt.sppringlatestsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired // daca nu folosim @Autowired avem nevoie de un constructor
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreateTime(LocalDateTime.now());

        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByUsername(String username){

        return userRepository.findByUsername(username); // metoda este deja implementata in JPA Repository
    }

    @Override
    @Transactional // ne trebuie cand facem un update sau delete
    public  void changeRole(Role newRole, String username){

        userRepository.updateUserRole(username, newRole);
    }
}

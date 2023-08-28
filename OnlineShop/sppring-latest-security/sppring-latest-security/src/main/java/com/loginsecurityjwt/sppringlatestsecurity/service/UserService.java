package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.Role;
import com.loginsecurityjwt.sppringlatestsecurity.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);

    Optional<User> findByUsername(String username);

    void changeRole(Role newRole, String username);
}

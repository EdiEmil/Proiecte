package com.loginsecurityjwt.sppringlatestsecurity.repository;

import com.loginsecurityjwt.sppringlatestsecurity.model.Role;
import com.loginsecurityjwt.sppringlatestsecurity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    // findBy + fieldName
    Optional<User> findByUsername(String username);

    @Modifying // semnalam ca modificam baza de date
    @Query("update User set role = :role where username = :username") // avem =: pentru parametrii
    void updateUserRole(@Param("username") String username, @Param("role")Role role); // daca avem custom query ne trebuie @Param
}

package com.loginsecurityjwt.sppringlatestsecurity.security.jwt;

import com.loginsecurityjwt.sppringlatestsecurity.security.UserPrinciple;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface JwtProvider {

    // in JwtProvider generam authentication din request HTTP

    String generateToken(UserPrinciple auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);
}

package com.licenta.backend.LicentaBackend.utils;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;

public class SecurityUtils {

    // sunt cu acces public pentru ca este o clasa utils si trebuie sa poata fi accesate si de alte clase
    public static final String ROLE_PREFIX = "ROLE_";
    public static final String AUTH_HEADER = "authorization";
    public static final String AUTH_TOKEN_TYPE = "Bearer";
    public static final String AUTH_TOKEN_PREFIX = AUTH_TOKEN_TYPE + " ";

    public static SimpleGrantedAuthority convertToAuthority(String role){

        String formattedRole =  role.startsWith(ROLE_PREFIX) ? role : ROLE_PREFIX + role; // daca nu exista prefixul de dinaintea rolului il adaugam

        return new SimpleGrantedAuthority(formattedRole);
    }

    public static String extractAuthTokenFromRequest(HttpServletRequest request){

        String bearerToken = request.getHeader(AUTH_HEADER);

        if(StringUtils.hasLength(bearerToken) && bearerToken.startsWith(AUTH_TOKEN_PREFIX)){

            return bearerToken.substring(7);
        }
        return null;
    }
}

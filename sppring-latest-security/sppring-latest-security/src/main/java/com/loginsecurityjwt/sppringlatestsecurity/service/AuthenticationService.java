package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.User;

public interface AuthenticationService {
    User signInAndReturnJWT(User signInRequest);
}

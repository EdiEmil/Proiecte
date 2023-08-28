package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.Admin;
import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Farmacist;
import com.licenta.backend.LicentaBackend.models.User;

public interface AuthenticationService {
    User signInAndReturnJWT(User signInRequest);

    DoctorSpital signInAndReturnJWT(DoctorSpital signInRequest);

    Admin signInAndReturnJWT(Admin signInRequest);

    Farmacist signInAndReturnJWT(Farmacist signInRequest);
}

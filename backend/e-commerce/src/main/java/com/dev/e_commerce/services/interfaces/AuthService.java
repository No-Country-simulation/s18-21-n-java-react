package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.authorization.AuthRequest;
import com.dev.e_commerce.dtos.authorization.AuthResponse;

public interface AuthService {

AuthResponse authentication(AuthRequest authRequest);
}

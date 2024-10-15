package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.request.AuthRequest;
import com.dev.e_commerce.dtos.response.AuthResponse;

public interface AuthService {

AuthResponse authentication(AuthRequest authRequest);
}

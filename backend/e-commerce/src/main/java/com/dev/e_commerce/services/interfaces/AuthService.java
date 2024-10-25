package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.request.AuthRequest;
import com.dev.e_commerce.dtos.response.AuthResponse;
import com.dev.e_commerce.models.Client;

public interface AuthService {

  AuthResponse authentication(AuthRequest authRequest);

  Client getAuthClient();
}

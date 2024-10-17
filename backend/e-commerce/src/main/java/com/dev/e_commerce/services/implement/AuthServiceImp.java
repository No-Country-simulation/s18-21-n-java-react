package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.config.token.JwtTokenService;
import com.dev.e_commerce.dtos.authorization.AuthRequest;
import com.dev.e_commerce.dtos.authorization.AuthResponse;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.services.interfaces.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImp implements AuthService {

    private final AuthenticationManager authManager;
    private final JwtTokenService jwtTokenService;
    @Autowired
    public AuthServiceImp(AuthenticationManager authManager, JwtTokenService jwtTokenService) {
        this.authManager = authManager;
        this.jwtTokenService = jwtTokenService;
    }

    @Override
    public AuthResponse authentication(AuthRequest authRequest) {

       Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));
        SecurityContextHolder.getContext().setAuthentication(auth);
       User user= (User) auth.getPrincipal();
        String token = jwtTokenService.getToken(user);
        return new AuthResponse(token, user.getId());
    }


}

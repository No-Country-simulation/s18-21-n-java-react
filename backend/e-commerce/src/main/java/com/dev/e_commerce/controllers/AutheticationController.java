package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.authorization.AuthRequest;
import com.dev.e_commerce.dtos.authorization.AuthResponse;
import com.dev.e_commerce.services.implement.AuthServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AutheticationController {

    private final AuthServiceImp authServiceImp;

    @Autowired
    public AutheticationController(AuthServiceImp authServiceImp) {
        this.authServiceImp = authServiceImp;
    }

    @RequestMapping("/login")
    public ResponseEntity<AuthResponse> login(AuthRequest authRequest) {
        AuthResponse authResponse = authServiceImp.authentication(authRequest);
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

}

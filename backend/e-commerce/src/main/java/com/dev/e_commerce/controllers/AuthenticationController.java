package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.request.AuthRequest;
import com.dev.e_commerce.dtos.response.AuthResponse;
import com.dev.e_commerce.services.implement.AuthServiceImp;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.base}/auth")
public class AuthenticationController {

    private final AuthServiceImp authServiceImp;

    @Autowired
    public AuthenticationController(AuthServiceImp authServiceImp) {
        this.authServiceImp = authServiceImp;
    }

    @PostMapping("/login")
    @Operation(summary = "Login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest) {
        AuthResponse authResponse = authServiceImp.authentication(authRequest);
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

}

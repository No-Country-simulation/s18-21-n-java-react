package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.AuthRequest;
import com.dev.e_commerce.dtos.response.AuthResponse;
import com.dev.e_commerce.dtos.response.ClientResDto;
import com.dev.e_commerce.mappers.ClientMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.services.implement.AuthServiceImp;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base}/auth")
public class AuthenticationController {

  private final AuthServiceImp authServiceImp;
  private final ClientMapper clientMapper;

  @Autowired
  public AuthenticationController(AuthServiceImp authServiceImp, ClientMapper clientMapper) {
    this.authServiceImp = authServiceImp;
    this.clientMapper = clientMapper;
  }

  @PostMapping("/login")
  @Operation(summary = "Login")
  public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest) {
    AuthResponse authResponse = authServiceImp.authentication(authRequest);
    return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
  }
  @GetMapping("/user")
  @Operation(summary = "Get current authenticated user")
  public ResponseEntity<?> getClientAuth() {
    Client client = this.authServiceImp.getAuthClient();
    ApiResponseDto<ClientResDto> response = new ApiResponseDto<>(true,
            "Current auth",
            this.clientMapper.toResponse(client));
    return ResponseEntity.ok(response);
  }
}

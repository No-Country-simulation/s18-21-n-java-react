package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.config.token.JwtTokenService;
import com.dev.e_commerce.dtos.request.AuthRequest;
import com.dev.e_commerce.dtos.response.AuthResponse;
import com.dev.e_commerce.exceptions.AccountNotVerified;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.repositories.ClientRepository;
import com.dev.e_commerce.services.interfaces.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AuthServiceImp implements AuthService {

  private final AuthenticationManager authManager;
  private final JwtTokenService jwtTokenService;
  private final ClientRepository clientRepository;

  @Autowired
  public AuthServiceImp(AuthenticationManager authManager, JwtTokenService jwtTokenService, ClientRepository clientRepository) {
    this.authManager = authManager;
    this.jwtTokenService = jwtTokenService;
    this.clientRepository = clientRepository;
  }

  @Override
  public AuthResponse authentication(AuthRequest authRequest) {
    try {
      Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));
      SecurityContextHolder.getContext().setAuthentication(auth);
      User user = (User) auth.getPrincipal();
      String token = jwtTokenService.getToken(user);
      return new AuthResponse(token, user.getId());
    }
    catch (DisabledException e){
      throw new AccountNotVerified("Account not verified, email:" + authRequest.email());
    }
  }

  @Override
  public Client getAuthClient() {
    var authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    return this.clientRepository.findById(authUser.getId())
            .orElseThrow(() -> new ApplicationException("Client not found, id: " + authUser.getId()));
  }

}

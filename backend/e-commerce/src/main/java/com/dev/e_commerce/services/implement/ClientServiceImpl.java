package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.repositories.ClientRepository;
import com.dev.e_commerce.services.interfaces.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {
  private final ClientRepository clientRepository;

  @Override
  public Client getByUser(User user) {
//    return this.clientRepository.findByUser(user).orElseThrow(() -> new ApplicationException("Cliente not found"));
    return null;
  }
}

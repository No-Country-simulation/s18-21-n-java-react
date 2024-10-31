package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.ClientMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.repositories.ClientRepository;
import com.dev.e_commerce.services.interfaces.AuthService;
import com.dev.e_commerce.services.interfaces.ClientService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClientServiceImpl implements ClientService {
  private final ClientRepository clientRepository;
  private final ClientMapper clientMapper;
  private final AuthService authService;

  @Transactional
  @Override
  public Client save(Client entity) {
    log.info(entity.getId()+": id");
    return this.clientRepository.save(entity);
  }

  @Override
  public Client findById(Long id) {
    return this.clientRepository.findById(id)
            .orElseThrow(() -> new ApplicationException("Client not found, id: " + id));
  }

  @Override
  public Iterable<Client> findAll() {
    return this.clientRepository.findAll();
  }

  @Override
  public void deleteById(Long id) {
    this.findById(id);
    this.clientRepository.deleteById(id);
  }

  @Override
  public Client updateById(Long id, Client entity) {
    var previousClient = this.findById(id);
    this.clientMapper.update(previousClient, entity);
    return this.clientRepository.save(previousClient);
  }
}

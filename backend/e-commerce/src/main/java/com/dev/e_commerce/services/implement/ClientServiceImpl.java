package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.repositories.ClientRepository;
import com.dev.e_commerce.services.interfaces.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private ClientRepository clientRepository;


    @Override
    public Client saveClient(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public Client findClientById(Long id) {
        return this.clientRepository.findById(id).orElse(Client.builder().build());
    }

    @Override
    public void updateCliente(Client client) {

        this.clientRepository.save(client);


    }

    @Override
    public void deleteClientById(Long id) {

        this.clientRepository.deleteById(id);

    }

    @Override
    public List<Client> findAll() {
        return this.clientRepository.findAll();
    }
}

package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.models.Client;

import java.util.List;

public interface ClientService {

    Client saveClient(Client client);
    Client findClientById(Long id);
    void updateCliente(Client client);
    void deleteClientById(Long id);
    List<Client> findAll();
}

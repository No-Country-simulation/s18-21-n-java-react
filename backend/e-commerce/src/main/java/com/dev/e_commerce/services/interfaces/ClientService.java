package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.User;

public interface ClientService {
  Client getByUser(User user);
}

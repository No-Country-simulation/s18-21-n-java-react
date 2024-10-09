package com.dev.e_commerce.repositories;

import com.dev.e_commerce.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {
}

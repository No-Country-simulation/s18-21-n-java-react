package com.dev.e_commerce.services.interfaces;


import com.dev.e_commerce.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface OrderService {

    Order createOrder(Order order); //
    Order updateOrder(Long orderId, Order order);
    Order getOrderById(Long idOrder);
    Page<Order> getAllOrder(Pageable pageable);
}

package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.repositories.OrderRepository;
import com.dev.e_commerce.services.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    private OrderRepository orderRepository;


    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Long orderId, Order order) {
        return null;
    }

    @Override
    public Order getOrderById(Long idOrder) {
        return orderRepository.findById(idOrder).orElseThrow();
    }

    @Override
    public Page<Order> getAllOrder(Pageable pagable) {
        return orderRepository.findAll(pagable);
    }
}

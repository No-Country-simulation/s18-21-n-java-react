package com.dev.e_commerce.services;

import com.dev.e_commerce.dtos.OrderDto;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.repositories.OrderRepository;
import com.dev.e_commerce.services.interfaces.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {

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
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }
}

package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.dtos.reponse.OrderResponseDto;
import com.dev.e_commerce.dtos.request.OrderRequestDto;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.repositories.OrderRepository;
import com.dev.e_commerce.services.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    @Override
    public OrderResponseDto save(OrderRequestDto requestDTO) {
        return null;
    }

    @Override
    public Optional<OrderResponseDto> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Iterable<OrderResponseDto> findAll() {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }
}

package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.reponse.OrderResponseDto;
import com.dev.e_commerce.dtos.request.OrderRequestDto;
import com.dev.e_commerce.models.Order;

import java.util.List;

public interface OrderService extends ServiceGeneric<Order, OrderRequestDto, OrderResponseDto>{

//    Order createOrder(Order order);
    Order createOrder(Order order); // Added method signature for creating an order
    Order updateOrder(Long orderId, Order order);
    Order getOrderById(Long idOrder);
    List<Order> getAllOrder();
}

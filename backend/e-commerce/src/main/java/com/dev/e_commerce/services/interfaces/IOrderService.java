package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.models.Order;

import java.util.List;

public interface IOrderService {

//    Order createOrder(Order order);
    Order createOrder(Order order); // Added method signature for creating an order
    Order updateOrder(Long orderId, Order order);
    Order getOrderById(Long idOrder);
    List<Order> getAllOrder();
}

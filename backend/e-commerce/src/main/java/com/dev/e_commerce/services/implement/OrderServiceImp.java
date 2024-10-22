package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.repositories.OrderRepository;
import com.dev.e_commerce.services.interfaces.AuthService;
import com.dev.e_commerce.services.interfaces.ClientService;
import com.dev.e_commerce.services.interfaces.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class OrderServiceImp implements OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private AuthService authService;


    @Override
    public Order createOrder(Order order) {
        var newDetails = order.getDetailsOrders();
        double amount = newDetails.stream()
                .mapToDouble(detail -> detail.getPrice() * detail.getQuantity())
                .sum();
        int totalElements = newDetails.stream()
                .mapToInt(DetailsOrder::getQuantity)
                .sum();
        order.setAmount(amount);
        order.setTotalProduct(totalElements);
        order.setClient(authService.getAuthClient());
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

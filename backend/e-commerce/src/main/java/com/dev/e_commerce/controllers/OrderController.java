package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.OrderDto;
import com.dev.e_commerce.mappers.OrderMapper;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.services.OrderService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("api/v1/order")
public class OrderController {
    @Autowired
    private ApiResponseDto response;
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderMapper orderMapper;

    @PostMapping("/")
    public ResponseEntity<ApiResponseDto<OrderDto>> createOrder(@RequestBody OrderDto orderDto) {
        try {
            Order order = orderMapper.toOrderEntity(orderDto);
            order = orderService.createOrder(order);
            OrderDto responseOrderDto = orderMapper.toOrderDto(order);
            ApiResponseDto<OrderDto> response = new ApiResponseDto<>(true, "Order created successfully", responseOrderDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponseDto<OrderDto> errorResponse = new ApiResponseDto<>(false, "Failed to create order", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    // Método para obtener una orden por ID
    @GetMapping("/{idOrder}")
    public ResponseEntity<ApiResponseDto<OrderDto>> getOrderById(@PathVariable Long idOrder) {
        try {
            Order order = orderService.getOrderById(idOrder);
            OrderDto responseOrderDto = orderMapper.toOrderDto(order);
            ApiResponseDto<OrderDto> response = new ApiResponseDto<>(true, "Order retrieved successfully", responseOrderDto);
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            ApiResponseDto<OrderDto> errorResponse = new ApiResponseDto<>(false, e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    // Método para obtener todas las órdenes
    @GetMapping("/")
    public ResponseEntity<ApiResponseDto<OrderDto>> getAllOrders() {
        List<Order> orders = orderService.getAllOrder();
        List<OrderDto> orderDtos = orders.stream()
                .map(orderMapper::toOrderDto)
                .collect(Collectors.toList());
        ApiResponseDto<OrderDto> response = new ApiResponseDto<>(true, "Orders retrieved successfully", orderDtos);
        return ResponseEntity.ok(response);
    }
}

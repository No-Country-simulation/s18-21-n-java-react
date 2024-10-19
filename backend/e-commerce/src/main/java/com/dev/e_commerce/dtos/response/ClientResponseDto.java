package com.dev.e_commerce.dtos.response;

import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.models.Product;

import java.util.Date;
import java.util.List;

public record ClientResponseDto(
        String phone,
        String documentIdentification,
        Date birthDate,
        Location location,
        List<Product> products,
        List<Order> orders

) {
}

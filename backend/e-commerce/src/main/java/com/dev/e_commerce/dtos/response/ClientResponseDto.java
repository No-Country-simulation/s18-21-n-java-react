package com.dev.e_commerce.dtos.response;

import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.models.Product;

import java.time.LocalDate;
import java.util.List;

public record ClientResponseDto(

        String phone,
        String documentIdentification,
        LocalDate birthDate,
        Location location,
        List<Product> products,
        List<Order> orders


) {
}

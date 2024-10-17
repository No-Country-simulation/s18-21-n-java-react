package com.dev.e_commerce.dtos.request;

import jakarta.validation.constraints.NotNull;

public record ProductRequestDto(

@NotNull(message = "Name Produc cannot be empty")
        String name,
@NotNull(message = "price Produc cannot be empty")
        Double price,
@NotNull(message = "Description cannot be empty")
        String description,
        String brand,
@NotNull(message = "photoURL cannot be empty")
        String photoUrl,
@NotNull(message = "category cannot be empty")
        String category,
@NotNull(message = "stock cannot be empty")
        Integer stock,
        String shortDescription,
        Long clientId
) { }

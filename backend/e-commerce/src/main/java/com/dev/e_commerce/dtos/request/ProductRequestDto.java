package com.dev.e_commerce.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

public record ProductRequestDto(
        @NotBlank(message = "Name Product cannot be empty")
        String name,
        @NotNull(message = "price Product cannot be empty")
        Double price,
        @NotBlank(message = "Description cannot be empty")
        String description,
        @NotBlank
        String brand,
        @NotNull(message = "photo cannot be empty")
        MultipartFile photo,
        @NotBlank(message = "category cannot be empty")
        String category,
        @NotNull(message = "stock cannot be empty")
        Integer stock,
        String shortDescription
) {
}

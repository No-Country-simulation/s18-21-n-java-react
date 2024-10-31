package com.dev.e_commerce.dtos.request;

import jakarta.validation.constraints.NotNull;

public record CategoryRequestDto(
        @NotNull(message = "Category cannot be empty")
        String category
) { }
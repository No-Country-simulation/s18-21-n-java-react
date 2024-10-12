package com.dev.e_commerce.dtos.authorization;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;


public record AuthRequest(
        @NotBlank(message = "Email is required")
        @Email(message = "Must be a valid email address")
        String email,
        @NotBlank(message = "Password is required")
        @Size(min = 6, message = "Password must be at least 6 characters")
        String password
) {
}
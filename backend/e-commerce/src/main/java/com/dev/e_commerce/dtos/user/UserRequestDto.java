package com.dev.e_commerce.dtos.user;

import com.dev.e_commerce.models.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserRequestDto(

        @NotNull(message = "Name cannot be empty")
        String name,
        @NotNull(message = "Lastname cannot be empty")
        String lastname,
        @NotNull(message = "Email cannot be empty")
        @Email(message = "The email must be valid")
        String email,
        @NotNull(message = "Password cannot be empty")
        @Size(min = 6, message = "Password must be at least 8 characters long")
        String password,
        String photoUrl,
        @Enumerated(EnumType.STRING)
        Role role

) {
}

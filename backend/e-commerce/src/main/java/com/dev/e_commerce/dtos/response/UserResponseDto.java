package com.dev.e_commerce.dtos.response;

import com.dev.e_commerce.models.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record UserResponseDto(

        Long id,
        String name,
        String lastname,
        String email,
        String photoUrl,
        boolean isEnabled,
        @Enumerated(EnumType.STRING)
        Role role






) {
}

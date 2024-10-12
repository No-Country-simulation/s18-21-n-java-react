package com.dev.e_commerce.dtos.user;

import com.dev.e_commerce.models.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record UserRequestDto(
String name,
String lastname,
String email,
String password,
String photoUrl,
@Enumerated(EnumType.STRING)
Role role

) {
}

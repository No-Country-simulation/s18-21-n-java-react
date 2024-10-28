package com.dev.e_commerce.dtos.request;

import com.dev.e_commerce.dtos.OnCreate;
import com.dev.e_commerce.models.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public record UserRequestDto(

        @NotBlank(message = "Name cannot be empty")
        String name,
        @NotBlank(message = "Lastname cannot be empty")
        String lastname,
        @NotBlank(message = "Email cannot be empty")
        @Email(message = "The email must be valid")
        String email,
        @NotBlank(message = "Password cannot be empty")
        @Size(min = 6, message = "Password must be at least 6 characters long")
        String password,
        MultipartFile photo,
        @Enumerated(EnumType.STRING)
        Role role,
        @NotBlank(groups = {OnCreate.class})
        String phone,
        @NotBlank(groups = {OnCreate.class})
        String identification,
        @NotNull(groups = {OnCreate.class})
        @JsonFormat(pattern = "yyyy-MM-dd")
        LocalDate birthdate,
        @NotBlank(groups = {OnCreate.class})
        String country,
        @NotBlank(groups = {OnCreate.class})
        String city,
        @NotBlank(groups = {OnCreate.class})
        String address

) {
}

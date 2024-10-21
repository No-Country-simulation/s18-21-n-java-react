package com.dev.e_commerce.dtos.request;

public record UpdatePasswordDto(

        String oldPassword,
        String newPassword
) {
}

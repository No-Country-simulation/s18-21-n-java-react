package com.dev.e_commerce.dtos.user;

public record UpdatePasswordDto(

        String oldPassword,
        String newPassword
) {
}

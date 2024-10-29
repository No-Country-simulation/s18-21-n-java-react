package com.dev.e_commerce.dtos.response;


public record LocationResDto(
        long id,
        String country,
        String city,
        String address) {
}

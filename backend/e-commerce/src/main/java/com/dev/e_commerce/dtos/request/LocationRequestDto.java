package com.dev.e_commerce.dtos.request;

public record LocationRequestDto(
    String country,
    String city,
    String adress
) {
}

package com.dev.e_commerce.dtos.response;

import java.util.Date;

public record ClientResDto(
        long id,
        String phone,
        String identification,
        Date birthdate,
        String country,
        String city,
        String address
) {
}

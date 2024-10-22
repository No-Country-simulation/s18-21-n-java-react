package com.dev.e_commerce.dtos.request;


import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public record ClientRequestDto(
        String phone,
        String documentIdentification,
        @JsonFormat(pattern = "yyyy-MM-dd")
        Date birthDate,
//        Integer locationId
            String country,
        String city,
        String address
) {
}

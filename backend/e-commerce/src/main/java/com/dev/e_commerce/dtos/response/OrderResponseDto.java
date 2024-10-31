package com.dev.e_commerce.dtos.response;


import java.util.Date;
import java.util.List;

public record OrderResponseDto(
        long id,
        long clientId,
        Date date,
        double amount,
        int totalProduct,
        List<DetailsOrderRes> detailsOrderList
) {
}

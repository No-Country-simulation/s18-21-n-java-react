package com.dev.e_commerce.dtos;

import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.DetailsOrder;


import java.util.Date;
import java.util.List;

public record OrderDto(
        Long id,
        Client seller,
        Client client,
        Date date,
        Double amount,
        Integer totalProduct,
        List<DetailsOrder> detailsOrderList
        ) {
}
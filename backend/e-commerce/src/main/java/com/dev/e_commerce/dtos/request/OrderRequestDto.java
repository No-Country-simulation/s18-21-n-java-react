package com.dev.e_commerce.dtos.request;

import jakarta.validation.constraints.NotNull;

import java.util.List;

public record OrderRequestDto(

        @NotNull(message = "detailsOrders cannot be empty")  // Relación con detalles de la orden???
        List<DetailsOrderReq> detailsOrders
) {
}

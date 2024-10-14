package com.dev.e_commerce.dtos.request;

import com.dev.e_commerce.models.DetailsOrder;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;

public record OrderRequestDto(
        @NotNull(message = "seller_Id Cannot be empty")
        String seller_id,
        @NotNull(message = "client_Id Cannot be empty")
        String client_id,
        Date date,
        @NotNull(message = "amount Cannot be empty")
        Double amount,
        @NotNull(message = "totalProduct Cannot be empty")
        Integer totalProduct,
        @NotNull(message = "detailsOrders cannot be empty")  // Relación con detalles de la orden???
        List<DetailsOrder> detailsOrders
) {
}

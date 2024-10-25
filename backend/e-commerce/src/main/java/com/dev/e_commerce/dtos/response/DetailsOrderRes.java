package com.dev.e_commerce.dtos.response;

public record DetailsOrderRes(
        long id,
        long orderId,
        long productId,
        long sellerId,
        int quantity,
        double price
) {
}

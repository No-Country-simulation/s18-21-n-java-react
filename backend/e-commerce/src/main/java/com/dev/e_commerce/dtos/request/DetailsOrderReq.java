package com.dev.e_commerce.dtos.request;

import com.dev.e_commerce.dtos.OnCreate;
import com.dev.e_commerce.dtos.OnUpdate;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record DetailsOrderReq(
        @NotNull(groups = {OnCreate.class})
        Long productId,
        @NotNull(groups = {OnCreate.class})
        @Min(value = 0, groups = {OnCreate.class, OnUpdate.class})
        Integer quantity
) {
}

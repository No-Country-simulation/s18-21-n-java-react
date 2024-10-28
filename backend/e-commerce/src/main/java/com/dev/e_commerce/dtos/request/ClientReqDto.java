package com.dev.e_commerce.dtos.request;

import com.dev.e_commerce.dtos.OnCreate;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record ClientReqDto(
        @NotBlank(groups = {OnCreate.class})
        String phone,
        @NotBlank(groups = {OnCreate.class})
        String identification,
        @NotNull(groups = {OnCreate.class})
        @JsonFormat(pattern = "yyyy-MM-dd")
        Date birthdate,
        @NotBlank(groups = {OnCreate.class})
        String country,
        @NotBlank(groups = {OnCreate.class})
        String city,
        @NotBlank(groups = {OnCreate.class})
        String address
) {
}

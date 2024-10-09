package com.dev.e_commerce.dtos;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponseDto<T>  implements Serializable {

    boolean status;
    String message;
    T data;
    Iterable<T> dataIterable;


    public ApiResponseDto(boolean status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public ApiResponseDto(boolean status, String message, Iterable<T> dataIterable) {
        this.status = status;
        this.message = message;
        this.dataIterable = dataIterable;
    }
}
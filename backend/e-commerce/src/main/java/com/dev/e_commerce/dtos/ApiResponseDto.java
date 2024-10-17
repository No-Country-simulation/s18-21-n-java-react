package com.dev.e_commerce.dtos;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponseDto<T>  implements Serializable {

    boolean status;
    String message;
    T data;    // Usado para datos no paginados
    List<T> dataList;      // Usado para datos paginados (listas)
    int currentPage;//include data for pagination
    int totalPages;
    long totalItems;

    // Constructor para datos no paginados
    public ApiResponseDto(boolean status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    // Constructor para datos paginados
    public ApiResponseDto(boolean status, String message, List<T> dataList, Integer currentPage, Integer totalPages, Long totalItems) {
        this.status = status;
        this.message = message;
        this.dataList = dataList;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        this.totalItems = totalItems;
    }
}
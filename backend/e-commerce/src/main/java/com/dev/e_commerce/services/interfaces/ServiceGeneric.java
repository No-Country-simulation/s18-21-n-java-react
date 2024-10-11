package com.dev.e_commerce.services.interfaces;

import java.util.Optional;

public interface ServiceGeneric<T, RequestDto, ResponseDto> {

    ResponseDto save(RequestDto requestDTO);

    Optional<ResponseDto> findById(Long id);

    Iterable<ResponseDto> findAll();

    void deleteById(Long id);
}

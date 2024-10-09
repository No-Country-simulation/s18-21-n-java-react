package com.dev.e_commerce.services.interfaces;

import java.util.Optional;

public interface ServiceGeneric<T, EntityDto> {

    EntityDto save(EntityDto requestDTO);

    Optional<EntityDto> findById(Long id);

    Iterable<EntityDto> findAll();

    void deleteById(Long id);

}

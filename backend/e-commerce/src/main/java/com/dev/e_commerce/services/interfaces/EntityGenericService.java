package com.dev.e_commerce.services.interfaces;

import java.util.Optional;

public interface EntityGenericService<T> {
  T save(T entity);

  T findById(Long id);

  Iterable<T> findAll();

  void deleteById(Long id);

  T updateById(Long id, T entity);
}

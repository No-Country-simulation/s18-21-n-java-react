package com.dev.e_commerce.repositories;

import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.models.Category;
import com.dev.e_commerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(Category category);
}

package com.dev.e_commerce.services.interfaces;


import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.models.Product;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ProductService {


    Page<Product> listProduct(int page, int size);
    Product guardarProducto(Product product);
    Optional<ProductResponseDTO> buscarProducto(long productId);
void modificarProducto(ProductRequestDto productRequestDto, long productId);
    void EliminarProducto (long productId);
    long countTotalProducts();

}

package com.dev.e_commerce.services.interfaces;


import com.dev.e_commerce.dtos.ProductDTO;
import com.dev.e_commerce.models.Product;

import java.util.List;

public interface ProductService {


     List<Product> listProduct();
    Product guardarProducto(ProductDTO productTO);
    void modificarProducto(long productId, ProductDTO productDTO);
    void EliminarProducto (long productId);
}
